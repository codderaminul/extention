LOGOIMGXSDF = chrome.runtime.getURL("./icons8-image-48.png")
const REMOVEBG_CODE_SFDXFVD234 = `
<button class="kljsdhkcfj" id="ijeshgfis"><img src="${LOGOIMGXSDF}"></button>
<div class="dfgkjdshfkgc" id="sasxfskdufhs">
    <button id="closezsdf">X</button>
    <div class="">
        <form style="max-width: 550px;margin: 0 auto;">
            <div id="custom" class="">
                <label id="selectImage" for="inputTag" class="sdfsadfcsdf34w2">
                    <i class="fa fa-2x fa-camera mt-3"></i> <br/>
                    Drop your WebP, PNG or JPEG files here!<br/>
                    <p>Click here to upload image</p>
                    <input id="inputTag" type="file" name="image" required/>
                    <br/>
                    <span class="" id="imageName"></span>
                </label>
                <div class="final images">
                
                </div>
            </div>
            <input id="RemoveBG" class="button-sadfsfsdfsdfcw234" type="submit" value="Remove Background">
        </form>
    </div>

    <div class="d-none" id="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div class="downloadbutton2934xsdf">
    <a class="d-none" id="image_output" class="downloadxafa13123" href="{{ image }}" download="">Download Image</a>
    </div>
</div>
`
document.querySelector('body').innerHTML += REMOVEBG_CODE_SFDXFVD234

document.getElementById('ijeshgfis').addEventListener('click', (e) => {
    document.getElementById('sasxfskdufhs').style.display = 'block'
})
document.getElementById('closezsdf').addEventListener('click', (e) => {
    document.getElementById('sasxfskdufhs').style.display = 'none'
})


    // RemoveBG 
    document.getElementById("RemoveBG").addEventListener("click", function (e) {
        // set preventDefault
        e.preventDefault();
        // get image from the image remove form
        var image = document.getElementById("inputTag").files[0];

        // if the image
        var loading = document.getElementById("loading")

        if(image){

            // Output image div
            var image_output = document.getElementById("image_output")
            OutputEventHandler(loading,1)  

            var formdata = new FormData();
            formdata.append("image", image)
            formdata.append("csrfmiddlewaretoken", '{{ csrf_token }}')

                fetch("http://127.0.0.1:8000/api/", {
                    method: "POST",
                    headers: new Headers(),
                    body: formdata,
                })
                .then((e) => e.json())
                .then((e) => {
                    // set image path image_output
                    image_output.href = e.image
                    OutputEventHandler(image_output,1)
                    OutputEventHandler(loading,2)
                })
                .catch((e) => {
                    OutputEventHandler(image_output,2)
                    console.log(e);
                });
        }else{
            OutputEventHandler(loading,2)
            console.log("No image selected")
        }

        });


        function OutputEventHandler(name, id){
            if(id == 1){
                name.classList.remove("d-none")
                name.classList.add("block")
            }else if (id == 2){
                name.classList.remove("block")
                name.classList.add("d-none")
            }
        }
    