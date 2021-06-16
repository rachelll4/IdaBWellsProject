//REQUEST THE JSON

    //store header and section as variables
    
    const datatable = document.querySelector('section');
    

    
    //store JSON in a variable
    let requestURL = 'https://redrecord.herokuapp.com/red_record/red_record.json?'; //_sort=alleged_crime&state__exact=Texas';

    //create request object
    let request = new XMLHttpRequest();

    //open the request
    request.open('GET', requestURL);

    //set type to JSON
    request.responseType = 'json';

    //send request
    request.send();

    //Store the request in a variable called murder
    //pass the object to two functions - populateHeader and showHeroes
    request.onload = function() {
        const murder = request.response; 
        console.log(murder);
        populateDatatable(murder);
        transform(murder);
        
    }

    //END REQUEST

    let victimDataArray = [];

    function transform(murderData){

        for (let i = 0; i < murderData.rows.length; i++) {

            let temp = {};
            
            for(let j = 0; j < murderData.columns.length; j++) {
                
                temp[murderData.columns[j]] = murderData.rows[i][j]
            }

            victimDataArray.push(temp)
        }
        console.log(victimDataArray)
    }



    //Create function to populate header based on JSON
  

    function populateDatatable(obj) {       

        const victims = obj['rows'];
    
        for (let i = 0; i < victims.length; i++) {
            const myArticle = document.createElement('article');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');


            //if this was a string, say name, it would be:
            //myH2.textContent = victims[i].name;
            // EACH OF THESE SHOULD BE A BOOTSTRAP MODULE

            myH2.innerHTML = '<a href="http://www.umd.edu">Name: ' + victims[i]["2"] + '</a>';
            myPara1.innerHTML = 'City:' + victims[i]["3"];
            myPara2.textContent = 'State: ' + victims[i]["4"];
            myPara3.textContent = 'Date: ' + victims[i]["5"];
            myPara4.innerHTML = '<strong>Crime: ' + victims[i]["6"] + '</strong>';

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);

            datatable.appendChild(myArticle);
        }
    }

  //Next page function
  // add the next page json url to local storage for use in page 2
  function populateNext(obj) {
        var nextPage = obj['next_url'];
        localStorage.setItem("nextPageURL",nextPage);

        //if this is the end of results, hide the next link
         if (obj['next_url'] != null) {
           document.getElementById('next-link').style.display = 'block';
                } else {
            document.getElementById('next-link').style.display = 'none';
        }

    }

