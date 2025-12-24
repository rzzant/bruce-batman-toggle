let isBatman=false;

function toggleMode(){
  const body=document.body;
  const title=document.getElementById("title");
  const quote=document.getElementById("quote");
  const btn=document.querySelector("button");

  if(!isBatman){
    body.className="batman";
    title.innerText="Batman";
    quote.innerText="I am the night.";
    btn.innerText="Return to Bruce Wayne";
    isBatman=true;
  }else{
    body.className="bruce";
    title.innerText="Bruce Wayne";
    quote.innerText="Philanthropist. Billionaire. Gotham citizen.";
    btn.innerText="Become Batman";
    isBatman=false;
  }
}
