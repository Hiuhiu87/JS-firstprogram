let AEdge;
let BEdge;
let CEdge;

window.onload = function(){
    document.getElementById("submit-button").onclick = function(){
        AEdge = document.getElementById("input-A").value;
        AEdge = Number(AEdge);
        BEdge = document.getElementById("input-B").value;
        BEdge = Number(BEdge);
        CEdge = Math.sqrt((BEdge * BEdge) + (AEdge * AEdge));
        document.getElementById("result").innerHTML = "Kết quả cạnh C là: " + CEdge;
        console.log(AEdge);
        console.log(BEdge);
        console.log(CEdge);
    };
};
