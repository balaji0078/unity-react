import React, { useState,useEffect } from 'react';


var htmlData = <div dangerouslySetInnerHTML={{ __html:`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Introduction</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>&nbsp;</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Service we provide</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Using our website, you will know about &nbsp;</p>
<ul style="list-style-type: undefined;">
    <li>Every type of stores available near you&nbsp;</li>
    <li>And also get to know about other service provider like Plumber, electrician and other profession near your place</li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Marketing technique we follow</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>We follow an idea, by giving coupons to our users who refer other to our website.&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Referring concept</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Each person must refer two persons. Choosing of person is your choice. If you choose the first one from your family and the next one is your neighbor, the spreading process will spread evenly. So, everyone will know about our website. Without referrer ID no one can take part in our referrer program but everyone can use our website.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>&nbsp;</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>&nbsp;</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>List of Schemes&nbsp;</strong></p>
<ol style="list-style-type: decimal;">
    <li>Subscribe for Rs.118 you get upto Rs.800 worth coupons and Rs.100 cashback.</li>
    <li>Subscribe for Rs.236 you get upto Rs.1600 worth coupons and Rs.200 cashback.</li>
    <li>Subscribe for Rs.590 you get upto Rs.4000 worth coupons and Rs.500 cashback.</li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:18.0pt;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>How it works</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>There are three types of packages in our scheme, you have to finish the first scheme to go to the next.&nbsp;</p>
<p style'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>When you sign-in to this scheme you have to remember the following guidelines</p>
<ul style="list-style-type: undefined;">
    <li>Assure the person you are going to refer is capable of referring two others, if they don&apos;t refer other two person then the software won&apos;t work</li>
    <li>Choosing of two people is your choice, but recommended way is first one would be your family member and the other is friends or neighbors, this way the software work with continues way.&nbsp;</li>
    <li>To take part in our coupon scheme you should have a REFERRER ID, referrer ID is given to the new joiner to coupon scheme. Only two persons can use a single referrer ID</li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Method</strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>After entering the referrer ID, you need to refer two persons with your referrer ID&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Assume the two persons are &lsquo;A&rsquo; and &lsquo;B&rsquo;.</p>
<ul class="decimal_type" style="list-style-type: undefined;">
    <li>If A refer the first person &lsquo;A1&rsquo;, you get Rs.25</li>
    <li>A refer the second person &lsquo;A2&rsquo;, you get next Rs.25</li>
    <li>If B refer the first person &lsquo;B1&rsquo;, you get next Rs.25</li>
    <li>B refer the second person &lsquo;B2&rsquo;, you get next Rs.25</li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>After &ldquo;A and B&rdquo; refer two person each &ldquo;A1,A2,B1,B2&rdquo; you get total Rs.100 cash back, you can collect the amount nearby store we mentioned in our website</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Then the same process done by &ldquo;A1,A2,B1,B2&rdquo;, while they get Rs.100 cash back one by one you get upto Rs.800 worth coupons.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>This process continuous throughout all scheme.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>` }}/>

function About(props) {


    useEffect(() => {
        // Update the document title using the browser API
      },[]);    


const renderAbout = () =>{
return htmlData
}


  return renderAbout()
}

export default About;