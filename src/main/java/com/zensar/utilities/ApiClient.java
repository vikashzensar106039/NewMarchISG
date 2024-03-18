package com.zensar.utilities;


import com.google.gson.Gson;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.WebResource.Builder;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.zensar.datatypes.APIBean;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map.Entry;

import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.media.multipart.FormDataMultiPart;
import org.glassfish.jersey.media.multipart.file.FileDataBodyPart;
import org.glassfish.jersey.media.multipart.internal.MultiPartWriter;

public class ApiClient {
    private Client client; 
    
    public ApiClient() {
        this.client = Client.create();
    }
    
    public Client getApiClient(){
    	return client;
    }
    

    public APIBean request(APIBean apiBean) {
        WebResource webResource = client.resource(apiBean.getUrl());
        WebResource.Builder builder = webResource.header("user-agent", "");
        for(Entry<String, String> entry : apiBean.getHeaders().entrySet()){
        	builder.header(entry.getKey(), entry.getValue());
        }
        ClientResponse response = null;
        long startTime = System.nanoTime();
        try {
            String method = apiBean.getMethod().trim().toUpperCase();
            switch (method) {
                case "GET":
                    response = builder.get(ClientResponse.class);
                    break;
                case "POST":
                    response = builder.post(ClientResponse.class,apiBean.getRequestPayload());
                    break;
                case "PUT":
                    response = builder.put(ClientResponse.class,apiBean.getRequestPayload());
                    break;
                case "DELETE":
                    response = builder.delete(ClientResponse.class,apiBean.getRequestPayload());
                    break;
                case "PATCH":
                    response = builder.method("PATCH",ClientResponse.class,apiBean.getRequestPayload());
                    break;
                default:
                    apiBean.setMessage("Invalid method");
                    return apiBean;
            }
        } catch (Exception e) {
            if (e.getCause() instanceof UnknownHostException) {
                apiBean.setMessage("Could not resolve host");
            } else if (e.getCause() instanceof MalformedURLException) {
                apiBean.setMessage("Invalid URL");
            } else if (e.getCause() instanceof NullPointerException) {
                apiBean.setMessage("Method not provided");
            }else if(e.getCause() instanceof IllegalArgumentException){
                apiBean.setMessage("Url is not absolute");
            }else if(e.getCause() instanceof ProtocolException){
                apiBean.setMessage("Invalid Method");
            }
            else {
                apiBean.setMessage("Something went wrong");
                
            }
            e.printStackTrace();
            long endTime = System.nanoTime();
            try {
                long duration = (endTime - startTime) / 1000000;
                apiBean.setResponseTime(duration + "");
            } catch (ArithmeticException ex) {
                apiBean.setResponseTime("0");
            }
            return apiBean;
        }
        long endTime = System.nanoTime();
        try {
            long duration = (endTime - startTime) / 1000000;
            apiBean.setResponseTime(duration + "");
        } catch (ArithmeticException e) {
            apiBean.setResponseTime("0");
        }
        apiBean.setResponseCode(response.getStatus() + "");
        apiBean.setActualResponse("");
        String responseText = "";
        try {
           	responseText = response.getEntity(String.class);
           
           	apiBean.setEntity(new Gson().fromJson(responseText, Object.class));
           	
        }
        catch (Exception e) {
            apiBean.setMessage("Problem while reading the response. Response may be incomplete");
        }
        apiBean.setActualResponse(responseText);
        return apiBean;
    }
    
    
    public  String uploadFile(String url, String filePath , String filePartName , HashMap<String, String> headers, HashMap<String, String> fields){
    	ClientConfig cc = new DefaultClientConfig();
    	cc.getClasses().add(MultiPartWriter.class);
    	Client client = Client.create(cc);
		WebResource webResource = client.resource(url);
		FileDataBodyPart filePart = new FileDataBodyPart(filePartName,  new File(filePath));
		FormDataMultiPart multipartEntity = new FormDataMultiPart();
		for (Entry<String, String> entry : fields.entrySet()) {
			multipartEntity.field(entry.getKey(), entry.getValue());
		}
		multipartEntity.bodyPart(filePart);
		Builder builder = webResource.type(MediaType.MULTIPART_FORM_DATA);
		for (Entry<String, String> entry : headers.entrySet()) {
			builder.header(entry.getKey(), entry.getValue());
		}
		ClientResponse response = builder.post(ClientResponse.class,multipartEntity);
		 String responseText = "";
	        try {
	            if (response.getEntityInputStream() != null) {
	            	responseText = response.getEntity(String.class);
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
		 return responseText;
    }
    




    public static void main(String args[]) throws IOException {
    	
       
    }   


}
