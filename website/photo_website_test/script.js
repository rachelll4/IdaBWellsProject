//REQUEST THE JSON

    //store header and section as variables
    
    const datatable = document.querySelector('section');
    

    

   let imgarray =  [
    {
        "ID": "001", 
        "Name": "Angular", 
        "Image": "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"
    },
  
    {
        "ID": "002", 
        "Name": "JSON", 
        "Image": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001"
    },
  
    {
        "ID": "003", 
        "Name": "Asp.Net", 
        "Image": "https://cnsmaryland.org/interactives/summer-2021/lynchings-project/images/news_clipart.png"
    }
];
    //Create function to populate header based on JSON
    function populateDatatable() {       
    
        for (let i = 0; i < imgarray.length; i++) {            

                const myPhoto = document.createElement('img');                    


                console.log(imgarray[i].Image);
                myPhoto.src = imgarray[i].Image;          
               
                

                datatable.appendChild(myPhoto);
            }
        return false
        }

    populateDatatable();
    
 

