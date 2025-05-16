/*
Task 3: Convert Promises to Async/Await
Further refactor the code to use async/await syntax.


Write an async function that sequentially:


Simulates downloading data.


Simulates writing data to a file.


Simulates uploading the file to a new URL.


Use async/await to handle the asynchronous operations in a cleaner and more readable way.

Additional Notes:
Actual network or file system operations are not required.


Use setTimeout or a similar mechanism to simulate delays and asynchronous behavior.


Add console logs to indicate the start and completion of each simulated step.



*/

console.log("task 3 with async await");


function downloadData(url) {
    console.log(`download started ${url}...`);
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            const data = "any data from the given url"
            console.log(`download completed ${url}...`);

            resolve(data);

        }, 2000);

    })



}

function GenerateFile(data) {

    console.log("generating file....");
    return new Promise((resolve, reject) => {


        setTimeout(() => {

            const file = "file_1.pdf";
            console.log(`file created , file name :-${file}....`);
            // let url = "www.fhijfh.com"

            resolve(file);
            //return file_xyz;

        }, 2000)

    })




}


function uploadFile(file, up_url) {
    console.log(`uploading of ${file} to ${up_url} started`);

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            console.log(`file ${file} uploaded successfully on ${up_url} `);
            resolve(up_url);
        }, 2000)

    })
}


(async () => {

    console.log("process starts");
    

    let data= await downloadData("www.downloadUrl.com");
    let file= await GenerateFile(data);
    let final_url= await uploadFile(file,"www.uploadUrl.com");

    console.log("process all done!!");
    

})();