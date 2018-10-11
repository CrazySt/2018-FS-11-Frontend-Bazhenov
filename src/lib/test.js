const say = function (name){
    var div = document.createElement('div');
    var body = document.getElementById('body');
    div.className = "my_div";
    div.innerHTML = "<p >Some text <style> p {background: #5515a5;} </style></p>" ;
    body.appendChild(div);
};
export default say;
