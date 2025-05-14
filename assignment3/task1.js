/*
Tasks:
Task 1: Implement Using Callbacks Only 
Write a function that simulates downloading data from a URL using a callback.


Write a function that simulates writing the downloaded data into a file using a callback, and returns a filename.


Write a function that simulates uploading the generated file to another URL using a callback.


Chain these functions together using callbacks to mimic a real-world asynchronous flow.


Only use callbacks for handling asynchronous operations in this task.
*/






function downloadData(url, callback) {
    console.log(`download started ${url}...`);

    setTimeout(() => {
        const data = "any data from the given url"
        console.log(`download completed ${url}...`);
        if(callback){
        callback(data);
        }
    }, 2000);

   

}

function GenerateFile(data, callback) {

    console.log("generating file....");

    setTimeout(() => {
      
        const file = "file_1.pdf" ;
  console.log(`file created , file name :-${file}....`);
       // let url = "www.fhijfh.com"

        if(callback){
        callback(file);
        }
           //return file_xyz;

    }, 2000)



 

}


function uploadFile(file, up_url,callback) {
    console.log(`uploading of ${file} to ${up_url} started`);

    setTimeout(() => {
        console.log(`file ${file} uploaded successfully on ${up_url} `);
        if(callback){
            callback(up_url);
        }
    }, 2000)
    

}


downloadData("abc.com",(file_abc)=>{
    GenerateFile(file_abc,(file_name)=>{
        uploadFile(file_name,"xyz.com");

        console.log("all done!!");
        
    })
})