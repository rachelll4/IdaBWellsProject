//REQUEST THE JSON

    //store header and section as variables
    
    const datatable = document.querySelector('section');
    

    
    //store JSON in a variable
    let requestURL = 'https://redrecord.herokuapp.com/red_record/red_record.json?_size=500';//&state__exact=Texas';

//https://redrecord.herokuapp.com/red_record?sql=select+rowid%2C+id%2C+names%2C+city%2C+state%2C+date%2C+alleged_crime%2C+full_location%2C+longitude%2C+latitude+from+red_record+limit+101&p0=n%25

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
        transform(murder);

        populateDatatable();
        
    }

    /*END REQUEST*/


    let victimDataArray = [];

    let transform = murderData => {
    //let transform = murderData => {
        for (let i = 0; i < murderData.rows.length; i++) {
            let temp = {};
            for(let j = 0; j < murderData.columns.length; j++) {
                temp[murderData.columns[j]] = murderData.rows[i][j]
            }
            victimDataArray.push(temp)
        }
        console.log(victimDataArray)

        return false
    }

    //Create function to populate header based on JSON
    function populateDatatable() {       

        var myRow = document.createElement('div');
        myRow.className='row';
    
        for (let i = 0; i < victimDataArray.length; i++) {

            if (true){//victimDataArray[i].alleged_crime =="Arson"){

                const myBootModule = document.createElement('div')
                myBootModule.className = "col-lg-3 col-md-6"

                const myH3 = document.createElement('h3');
                const myPara1 = document.createElement('p');
                const myPara2 = document.createElement('p');
                const myPara3 = document.createElement('p');
                const myPara4 = document.createElement('p');
                //const myPara5 = document.createElement('p');

                myH3.innerHTML += '<a href="http://www.umd.edu">' + victimDataArray[i].names + '</a>';
                myPara1.textContent = 'City: ' + victimDataArray[i].city;
                myPara2.textContent = 'State: ' + victimDataArray[i].state;
                myPara3.textContent = 'Date: ' + victimDataArray[i].date;
                myPara4.innerHTML = '<strong>Crime: ' + victimDataArray[i].alleged_crime + '</strong>';
                //myPara5.textContent = 'Row ID: ' +victimDataArray[i].rowid;

                myBootModule.appendChild(myH3);
                myBootModule.appendChild(myPara1);
                myBootModule.appendChild(myPara2);
                myBootModule.appendChild(myPara3);
                myBootModule.appendChild(myPara4);
                //myBootModule.appendChild(myPara5);

                

                if (i%4 == 0 && i != 0) {
                    datatable.appendChild(myRow);

                    var myRow = document.createElement('div'); //overwrites previous???
                    myRow.className='row';
                }
                myRow.appendChild(myBootModule);
            }
        }
        datatable.appendChild(myRow);
        return false
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

