/*
Task 2: Convert Callbacks to Promises
Refactor the above functions to return Promises instead of using callbacks.


Chain the operations by using .then() syntax.


Use Promises for asynchronous flow without any callback-based syntax.
*/


console.log("task2 with promisees");


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

downloadData("www.abcd.com")
    .then(
        (data) => {
            GenerateFile(data)

        }
    )
    .then(
        (file) => {
            uploadFile(file, "www.xyz.com")

        }
    )
    .then((final_url) => {
        console.log("the process is all done!!");

    })