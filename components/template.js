export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html() {
        return `
                <div class="create__container">
                <div class="left__part">
                <h2>Your Amogus</h2>
                <div class="amogus">
                    <img id="stockAmogus" src="images/d8e03e83dd7cac27b7fc85efbcb697b5.png" alt="stock-amogus" class="img">
                    <img id="body-1" src="images/wonder-day-among-us-1.png" class="img dn">
                    <img id="body-2" src="images/wonder-day-among-us-2.png" class="img dn">
                    <div class="amogus__hat1">
                        <img id="hat-1" src="images/26.png" alt="" class="fitting dn">
                    </div>
                    <div class="amogus__hat2">
                        <img id="hat-2" src="images/46.png" alt="" class="fitting dn">
                    </div>
                </div>
                </div>
                <div class="right__part">
                <h2>Edit your amogus</h2>
                <div class="editor__box">
                    <div class="hats">
                        <button id="hat-editor1" style="background-image: url(/images/26.png);" class="editor"></button>
                        <button id="hat-editor2" style="background-image: url(/images/46.png);" class="editor"></button>
                    </div>
                    <div class="bodies">
                        <button id="body-editor1" style="background-image: url(/images/wonder-day-among-us-1.png);" class="editor"></button>
                        <button id="body-editor2" style="background-image: url(/images/wonder-day-among-us-2.png);" class="editor"></button>
                    </div>
                </div>
                </div>
                </div>
                `
    },
    css() {
        return `
        <style>
        h2 {
            margin: 0;
        }
        
        .create__container  {
            display: flex;
        }
        
        .left__part {
            width: 50%;
            height: 100vh;
            /* background-color: red; */
            display: flex;
            flex-direction: column  ;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }
        
        .right__part {
            height: 100vh;
            width: 50%;
            /* background-color: blue; */
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        
        .amogus {
            padding: 70px;
            border: 1px solid black;
            border-radius: 8px;
        }
        
        .img {
            width: 250px;
            height: 250px;
            background-size: cover;
        }
        
        .fitting {
            position: absolute;
            width: 300px;
            height: 300px;
            top: 31%;
            left: 16%;
        }
        
        .dn {
            display: none;
        }
        
        .editor__box {
            display: flex;
            flex-direction: column;
        }   
        
        .editor {
            width: 100px;
            height: 100px;
            background-size: cover;
            border: none;
            background-color: #00000000;
            cursor: pointer;
        }        
        </style>
        `
    }
}
