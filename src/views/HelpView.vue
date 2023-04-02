<template>
  <div class="get-support">
    <div class="organisations">
      <h2>Cancer support and information organisations</h2>
      <ul v-for="skinHelp in skinCancerCharitiesWebsites" :key="skinHelp.name">
        <SkinCancerSupportCard :skinHelp="skinHelp" />
      </ul>
    </div>
    <div class="organisations">
      <h2>Other cancer charities</h2>
      <ul v-for="help in cancerCharitiesWebsites" :key="help.name">
        <AltCancerSupportCard :help="help" />
      </ul>
    </div>
    <div class="organisations">
      <h2>Useful info websites</h2>
      <ul v-for="infoWebsite in cancerInfoWebsites" :key="infoWebsite.name">
        <CancerInfoWebsitesCard :infoWebsite="infoWebsite" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import SkinCancerSupportCard from '../components/SkinCancerSupportCard.vue'
import AltCancerSupportCard from '../components/AltCancerSupportCard.vue'
import CancerInfoWebsitesCard from '../components/CancerInfoWebsitesCard.vue'

const skinCancerCharitiesWebsites = [
  {
    name: 'The British Skin Foundation',
    link: 'https://www.britishskinfoundation.org.uk/',
    tag: 'The British Skin Foundation is the only UK charity that raises money to fund research into all types of skin diseases, including skin cancer. From common conditions to potential killers, we work to understand skin disease inside out.',
    img: 'https://www.salts.co.uk/Files/Images/Corporate%20Responsibility/bsf.png'
  },
  {
    name: 'Melanoma UK',
    link: 'https://www.melanomauk.org.uk/',
    tag: 'Fighting Melanoma Together',
    img: 'https://professionaliverpool.com/assets/images/general/Melanoma-UK-Strapline-Version-400-RGB.jpg'
  },
  {
    name: 'Skcin',
    link: 'https://www.skcin.org/',
    tag: 'Raising awareness through education. Promoting prevention and early detection. Campaigning for change.',
    img: 'https://app.skcin.org/images/skcin-logo.jpg'
  },
  {
    name: 'Skin Cancer Foundation',
    link: 'https://www.skincancer.org/',
    tag: 'Since 1979, The Skin Cancer Foundation has set the standard for educating the public and the medical community about skin cancer, its prevention by means of sun protection, the need for early detection and prompt, effective treatment.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/The_Skin_Cancer_Foundation_Logo.png/220px-The_Skin_Cancer_Foundation_Logo.png'
  },
  {
    name: 'Skin Cancer Research Fund',
    link: 'https://www.skincancerresearch.org/',
    tag: 'Raising money for research into the causes, prevention and treatment of skin  cancer, especially melanoma and to raise awareness of the condition.',
    img: 'https://d1d8vslyhr7rdg.cloudfront.net/Pictures/1024x536/P/web/y/p/l/scarf_900x600logo_139098.png'
  },
  {
    name: 'Melanoma Focus',
    link: 'https://melanomafocus.org/',
    tag: 'As experts in melanoma, we provide information, guidance and support for patients, carers and healthcare professionals. We have built a community of melanoma specialists who underpin our commitment to melanoma education and research.',
    img: 'https://media.licdn.com/dms/image/C4D0BAQEm_I58OJICsA/company-logo_200_200/0/1641374287591?e=2147483647&v=beta&t=Wpgc2egEwIeG-UIxhP2o-QgQHOET7H1KU3maiYOZx4o'
  },
  {
    name: 'Melanoma Fund',
    link: 'https://www.melanoma-fund.co.uk/',
    tag: 'We raise awareness of melanoma and other forms of skin cancer.',
    img: 'https://www.melanoma-fund.co.uk/wp-content/uploads/2020/10/melanoma-fund-logo.svg'
  }
]

const cancerCharitiesWebsites = [
  {
    name: 'MacMillan',
    link: 'https://www.macmillan.org.uk/',
    tag: 'Because cancer can affect your life in so many ways, we do whatever it takes to give people the support they need',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/1152/brand.gif?itok=B0mVWgmV'
  },
  {
    name: 'Anthony Nolan',
    link: 'https://www.anthonynolan.org/',
    tag: 'Saving the ives of people with blood cancer',
    img: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/NST/EB3D9AB8-C3B5-0E3A-CED854EA10409CDB.jpg'
  },
  {
    name: 'Cancer Research UK',
    link: 'https://www.cancerresearchuk.org/',
    tag: 'Together we will beat cancer',
    img: 'https://www.earlycancer.cam.ac.uk/sites/www.earlycancer.cam.ac.uk/files/styles/leading/public/cruk_large.png?itok=efiaSZHD'
  },
  {
    name: 'Childhood Cancer Parent Alliance',
    link: 'https://www.ccpa.org.uk/',
    tag: 'United in helping families fight childhood and adolescent cancer across the UK.',
    img: 'https://wp1900.cancercaremap.org/wp-content/uploads/Screen20Shot202020-08-2520at201.58.5520PM.png'
  },
  {
    name: 'Young Lives VS Cancer',
    link: 'https://www.younglivesvscancer.org.uk/',
    tag: "We'll face it all, together. Help children and young people with cancer find the strength to face everything cancer throws at them.",
    img: 'http://images.justgiving.com/image/39065627-760d-4a63-abe3-de71475aefe0.png?template=size200x200'
  },
  {
    name: 'Ellen Macarthur Cancer Trust',
    link: 'https://www.ellenmacarthurcancertrust.org/',
    tag: 'Believe in a brighter future. For many young people, picking up from where they left off before cancer is not possible. When treatment ends our work begins. We inspire young people aged 8-24 to believe in a brighter future through sailing and outdoor adventure.',
    img: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Ellen_MacArthur_Foundation_Logo_%28blue%29.jpg'
  }
]

const cancerInfoWebsites = [
  {
    name: 'NHS',
    link: 'https://www.nhs.uk/conditions/cancer/'
  },
  {
    name: 'World Health Organization',
    link: 'https://www.who.int/health-topics/cancer#tab=tab_1'
  },
  {
    name: 'Mayo Clinic',
    link: 'https://www.mayoclinic.org/diseases-conditions/cancer/symptoms-causes/syc-20370588'
  },
  {
    name: 'The National Institute for Health and Care Excellence',
    link: 'https://www.nice.org.uk/guidance/conditions-and-diseases/cancer'
  },
  {
    name: 'WebMD',
    link: 'https://www.webmd.com/cancer/default.htm'
  }
]
</script>

<style scoped>
.get-support {
  padding: 20px;
}
.organisations ul {
  list-style-type: none;
  padding: 0;
}
h2 {
  font-size: 2rem;
  border-bottom: 1px solid #205295;
}
</style>
