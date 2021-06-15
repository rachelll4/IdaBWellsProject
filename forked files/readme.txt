******
List of Files and their contents: 

1. redrecord1895.xml 

This file contains the TEI encoding of Ida B. Wells' _A Red Record: Tabulated Statistics and Alleged Causes of Lynching in the United States, 1892-1893-1894. Respectfully submitted in "the land of the free and the home of the brave."_
 
 The original text is believed to be published in 1895 and was printed by Donohue & Henneberry Printers in Chicago. 
 The original text is held by the University of Chicago Special Collections Research Center. 
 The call number of the _A Red Record_ is HV6457 .B26 (Rare Books, Special Collections Research Center, University of Chicago). The link to the library record is https://catalog.lib.uchicago.edu/vufind/Record/1604256
 
 The images of the source text were processed with optical character recognition (OCR) software by Dr. Nicholas Hayward, Digital Humanities researcher and lecturer at Loyola University Chicago. The OCR text was corrected and encoded by Caitlin Pollock. 
 
 
 2. xpath_expressions.txt
 
These are the XPath expressions I used to isolate the 1893 and 1894 lynchings described in "Chapter II: Lynch Law Statistics" and "Chapter IX: Lynching Record of 1894" of _A Red Record_. 

3. grel_expressions.txt

These are are GREL expressions that were used in OpenRefine to create a comma-separated values file out of the XML-encoded descriptions of lynchings that were isolated using XPath. 

4. redrecord1893.csv

This file is the csv that was created from OpenRefine. It was then edited to place space holding longitude and latitude. There is more about this in the process section of this file.

5. redrecord1894.csv

This file is the csv that was created from OpenRefine. It was then edited to place space holding longitude and latitude. There is more about this in the process section of this file.

6. redrecord1893.geojson.txt

This GeoJson data from the 1893 lynchings. This was created using the redrecord1893.csv and geojson.io

7. redrecord1894.geojson.txt

This GeoJson data from the 1894 lynchings. This was created using the redrecord1894.csv and geojson.io

*****

Process to recreate these steps.

First, encode the plain text files of the _A Red Record_ using Text Encoding Initiative XML standard. Make to encode dates, person names, place names, and the alleged crimes. 

Second, isolate the lynchings of 1893 and 1894 using the XPath expressions. Copy the isolated information to new XML documents. (This is not necessary but makes the OpenRefine easier). 

Third, open OpenRefine (formerly known as GoogleRefine) and using the GREL Expressions, create a spreadsheet from the XML data. Even though the expression says it parses html, the elements are still XML. Google Refine has no XML parser but according to forums and documentation,the HTML parser, parsers tags and hierarchy and would work from XML. 

There is one row per date per alleged crime. Download the OpenRefine spreadsheets as CSV files to your computer. 

Fourth, open each CSV file and create two new columns, the first called "latitude" and the second called "longitude." Open geojson.io in your browser and drag redrecord1893.csv on geojson.io's map. From there begin edit each marker and moving it to its correct location. This might include some searching for the correct town or city in the correct state. When finished download the newly created GeoJson as a .txt file. Repeat for the redrecord1894.csv  

**********

Availability

The text of the _A Red Record_ is in the public domain because it was published before 1923. 

The encoded text is licensed under a Creative Commons Attribution-NonCommerical-ShareAlike 4.0 International License. The TEI encoding of _A Red Record_ is available for academic research and educational purposes only.

*********





 
