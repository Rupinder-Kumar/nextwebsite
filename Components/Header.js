import Head from "next/head";
import React from "react";

const Header = () => {
    return <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124337294-1"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-124337294-1');`
        }} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="keywords" content="UI/UX Design Agency, User Experience and User Interface Designer portfolio from india, top UI/UX mobile app designer website, UI/UX web design agency india, best UX UI freelance designer from India, top ui ux creative design agency, ux/ui designer naresh, Freelance web and mobile designer portfolio,website design company in chandigarh, best freelance graphic designer in Chandigarh, best web designer in chandiagrh, best freelance web designer in Chandigarh, creative freelance web designer in Chandigarh, freelance WordPress developer in Chandigarh, freelance web work services in Nangal, freelance website SEO service in Chandigarh, freelance web designer in Nangal, freelance E-commerce website in Chandigarh, best ux and ui designer in Chandigarh,best web designer in Chandigarh, best  content writer in Chandigarh, best digital marketer in Chandigarh, rupinder kumar,web designing comapany in ludhiana,web designing freelancer in ludhiana,web development services in ludhiana,web developer and designer Ludhiana,web developer and Designer" />

        <meta name="description" content="My name is Rupinder. I’m a Frontend developer with an eye for detail and a drive for quality.i stand on a sweet spot where design & code intersects." />

        <meta name="contact" content="rupinder3972@gmail.com" />

        <meta name="author" content="Rupinder kumar" />

        <meta name="robots" content="index, follow"></meta>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap"
            rel="stylesheet"
        />
        <title>My name is Rupinder. I’m a Frontend developer with an eye for detail and a drive for quality.i stand on a sweet spot where design & code intersects.</title>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86249812-1"></script> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZWQF46EVMW"></script>
<script dangerouslySetInnerHTML={{
    __html:`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZWQF46EVMW');`}}>
  
</script>

        {/* <script dangerouslySetInnerHTML={{
            __html:`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments)}

            gtag('js', new Date());

            gtag('config', 'UA-86249812-1');`
        }} /> */}

    </Head >
}

export default Header;