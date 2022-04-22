var selectedTab='';
var certificateList=["./fee.html","./custodian.html","./intership.html","./resident.html","./study.html","./studyconduct.html","./towhom.html"];
certificateList[selectedTab];
$(document).ready(function(){
    $(".tab").click(function()
{
    selectedTab=$(this).index();
    console.log(selectedTab);
    $('.tab-content').hide();
    $('#inputForm').show();
} );        

});


function showCert()
{
    document.getElementById('inputForm').style.display='none';
    document.getElementById('certificateWrapper').style.display='block';
    document.getElementById("certificateEmbed").setAttribute("src",certificateList[selectedTab]);
    //$("#certificate-embed").attr("src",certificateList[selectedTab]);
    

    //$("#certificate-wrapper").show();
}
