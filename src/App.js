import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
import Tree from './Home';
import Create from './CreateUser'
import Stores from './storeList';
import Introduction from './introduction'
import Model from './introModel'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import PayForm from './Payform'
import ShopTable from './shopTable'
function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // const token = getToken();
    // if (!token) {
    //   return;
    // }

    // axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
    //   setUserSession(response.data.token, response.data.user);
    //   setAuthLoading(false);
    // }).catch(error => {
    //   removeUserSession();
    //   setAuthLoading(false);
    // });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  var htmlData = () => {
  return( 
    
    <div dangerouslySetInnerHTML={{ __html: `<p style="line-height: 115%;text-align: center;background: transparent;margin-bottom: 0cm;">TERMS OF SERVICE</p>
<p style="line-height: 115%;text-align: center;background: transparent;margin-bottom: 0cm;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">OVERVIEW</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">This website is operated by <strong>Digital Unity</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to<strong>&nbsp;</strong><strong>Digital Unity</strong>.<strong>Digital Unity</strong> offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">By visiting our site and/ or purchasing something from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions (&ldquo;Terms of Service&rdquo;, &ldquo;Terms&rdquo;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 1 - ONLINE STORE TERMS</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You must not transmit any worms or viruses or any code of a destructive nature.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 2 - GENERAL CONDITIONS</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right to refuse service to anyone for any reason at any time.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Prices for our service are subject to change without notice.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 5 - PRODUCTS OR SERVICES</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to their Return Policy.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor&apos;s display of any color will be accurate.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">For more detail, please review our Returns Policy.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 7 - OPTIONAL TOOLS</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You acknowledge and agree that we provide access to such tools &rdquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 8 - THIRD-PARTY LINKS</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Certain content, products and services available via our Service may include materials from third-parties.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party&apos;s policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">If, at our request, you send certain specific submissions or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, &apos;comments&apos;), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene or otherwise objectionable or violates any party&rsquo;s intellectual property or these Terms of Service.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libellous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 10 - PERSONAL INFORMATION</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Your submission of personal information through the store is governed by our Privacy Policy.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 12 - PROHIBITED USES</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided &apos;as is&apos; and &apos;as available&apos; for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 14 - INDEMNIFICATION</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You agree to indemnify, defend and hold harmless <strong>Digital unity&nbsp;</strong>and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys&rsquo; fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 15 - SEVERABILITY</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 16 - TERMINATION</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 17 - ENTIRE AGREEMENT</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 18 - GOVERNING LAW</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 19 - CHANGES TO TERMS OF SERVICE</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">You can review the most current version of the Terms of Service at any time at this page.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 20 - CONTACT INFORMATION</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Questions about the Terms of Service should be sent to us at <u><a href="mailto:digitalunityecom@gmail.com"><strong>digitalunityecom@gmail.com</strong></a></u></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: center;background: transparent;margin-bottom: 0cm;">PRIVACY STATEMENT</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: center;background: transparent;margin-bottom: 0cm;">----</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">When you browse our store, we also automatically receive your computer&rsquo;s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 2 - CONSENT</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">How do you get my consent?</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">How do I withdraw my consent?</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time by us at: <u><a href="mailto:digitalunityecom@gmail.com"><strong>digitalunityecom@gmail.com</strong></a></u></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 3 - DISCLOSURE</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 4 - PAYMENT</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">For more insight, you may also want to read terms and conditions of razorpay on <u><a href="https://razorpay.com/">https://razorpay.com</a></u></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 5 - THIRD-PARTY SERVICES</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So, if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Once you leave our store&rsquo;s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website&rsquo;s Terms of Service.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">Links</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 6 - SECURITY</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 7 - COOKIES</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 8 - AGE OF CONSENT</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">SECTION 9 - CHANGES TO THIS PRIVACY POLICY</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;">If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
<p style="line-height: 115%;text-align: left;margin-bottom: 0cm;background: transparent;"><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="line-height: 115%;text-align: center;background: transparent;margin-bottom: 0cm;"><strong>Refund Policy</strong></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>If you read <strong>HOW IT WORK,&nbsp;</strong>after finishing your enrolment process of your first scheme, you naturally get your Rs.100 as a cash back without any terms and conditions. Rs.18 would be deducted for GST.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>Although you are not satisfied with our policy you may sent mail <u><a href="mailto:digitalunityecom@gmail.com">digitalunityecom@gmail.com</a></u> or call us on 9884588854 for refund.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>The following are the terms and conditions for refunds</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>Our policy lasts 10 days. If 10 days have gone by since your purchase, unfortunately we can&rsquo;t offer you a refund.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>To be eligible for a refund you must not use your referrer id to refer others, then your money Rs.100 without out GST will be refund within three working days.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>If your referrer id is given to others then you have to wait till the natural way of process to get your cashback by the policy of our scheme.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>This is the refund policy for our schemes.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>This refund policy does not applicable for the products and services which you get from our third-party resources where you get the product and services for the coupons we provide. Refund and exchange for those product and services are comes under there own refund policies.</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style="text-align: center;background: transparent;font-family: Arial, serif;line-height: 100%;margin-bottom: 0cm;"><strong>Communication Details</strong></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>Address - Old No.1/22, New No.1/344 Sambalal St.,</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;margin-left: 1.27cm;'>Navalur, CH-600130</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>Ph No - 9884588854</p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'>Mail ID - <u><a href="mailto:digitalunityecom@gmail.com">digitalunityecom@gmail.com</a></u></p>
<p style='line-height: 100%;text-align: left;margin-bottom: 0cm;background: transparent;font-family: "Arial", serif;'><br></p>`}}>
</div>
)
}

const contactUS = () =>{
  return (
    <>
    <center>
      <h1 className='bg-center'>
    Contact us
    </h1>
    </center>
    <p>
      Digital Unity</p>
    <p>
    Address - Old No.1/22, New No.1/344 Sambalal St.,
    <br/>
    Navalur, CH-600130
    <br/>
    Call us: Ph No - 9884588854
    <br/>
    Email us: Mail ID - digitalunityecom@gmail.com
    <br/>
    </p>
    </>
  )
}

  const terms = () =>{
    var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
    myWindow.document.write(htmlData);   // Text in the new window

  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/user">User</NavLink>
            {/* <NavLink activeClassName="active" to="/Create">SignIn</NavLink> */}
           <NavLink activeClassName="active" to="/login">Login</NavLink>
           <NavLink activeClassName="active" to="/stores">Stores</NavLink>
           <NavLink activeClassName="active" to="/payform">Coupon Redeem</NavLink>
           <NavLink activeClassName="active" to="/shoptable">Shop Table</NavLink>

            <a style={{marginLeft:17}} href='/terms' >
            <label className='ml-2' >Terms and Privacy Policy</label>
            </a>
            <a style={{marginLeft:17}} href='/contact' >
            <label className='ml-2' >Contact Us</label>
            </a>
            <a style={{marginLeft:17}} href='/aboutus' >
            <label className='ml-2' >About Us</label>
            </a>

            {/* <NavLink activeClassName="active" to="https://policywrite.s3.ap-south-1.amazonaws.com/Doc1.docx">Login</NavLink> */}



          </div>
          <div className="content">
            <Switch>
              {/* <Route exact path="/" component={Model} />  */}
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/create" component={Create} /> */}
              <Route exact path="/user" component={Tree} />
              <Route exact path="/stores" component={Stores} />
              <Route exact path="/terms" component={htmlData} />
              <Route exact path="/contact" component={contactUS} />
              <Route exact path="/" component={Login} />
              <Route exact path="/aboutus" component={Introduction} />
              <Route exact path="/payform" component={PayForm} />
              <Route exact path="/shoptable" component={ShopTable} />






              {/* <PublicRoute path="/login" component={Login} /> */}
              {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
