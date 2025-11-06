<template>
  <div class="privacy-policy">
    <header class="hero">
      <div class="hero__inner">
        <div class="hero__card" :class="gradientClasses">
          <p class="hero__card-eyebrow">Privacy Policy</p>
          <h1 class="hero__title">We&apos;re committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information.</h1>
        </div>
      </div>
    </header>

    <main class="layout">
      <aside class="toc">
        <div class="toc__inner">
          <h2 class="toc__heading">Chapter</h2>
          <nav class="toc__nav">
            <button
              v-for="section in sections"
              :key="section.id"
              type="button"
              :class="['toc__item', { 'toc__item--active': activeSection === section.id }]"
              @click="scrollTo(section.id)"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </aside>

      <article class="content">
        <div class="content__mobile-nav">
          <label class="content__mobile-label" for="mobile-nav">Jump to section</label>
          <select
            id="mobile-nav"
            class="content__mobile-select"
            v-model="selectedSection"
            @change="scrollTo(selectedSection)"
          >
            <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.label }}</option>
          </select>
        </div>

        <section
          v-for="section in sections"
          :id="section.id"
          :key="section.id"
          class="content__section"
        >
          <h2 class="content__heading">{{ section.heading }}</h2>
          <div class="content__body" v-html="section.body"></div>
        </section>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, computed } from 'vue'
import Footer from '../components/sections/Footer.vue'

// Define the gradient classes for the header banner
const gradientClasses = computed(() => {
  return [
    'bg-gradient-to-r',
    'from-red-600',
    'via-red-500',
    'to-gray-50/50',
  ];
});

const sections = [
  {
    id: 'introduction',
    label: 'Introduction',
    heading: 'DATA PRIVACY AND PROTECTION POLICY – SUBURBAN FIBER COMPANY LIMITED',
    body: /* html */ `
      <h3>Introduction</h3>
      <p>
        This Data Privacy and Protection Policy (the “Policy”) sets out the basis on which our company Suburban Fiber Company Limited (“Suburban” or “the Company” or “we” or “our”) will process any Personal Data we collect from Data Subjects, including our customers/clients and business contacts, or that is provided to us by Data Subjects or other sources.
      </p>
      <p>
        In the course of our business activities we collect, store and process Personal Data about our customers, suppliers and other third parties, and therefore in order to comply with the law and to maintain confidence in our business, we acknowledge the importance of correct and lawful treatment of this Data. Thus, this Policy sets out rules on data protection and the legal conditions that must be satisfied when we obtain, handle, process, transfer and store Personal Data. The procedures and principles set out herein must be followed at all times by us and our employees, agents, contractors, or other parties working on behalf of the Company. We aim to ensure the correct, lawful, and fair handling of all Personal Data and to respect legal rights of Data Subjects.
      </p>
    `
  },
  {
    id: 'meaning-of-key-terms',
    label: 'Meaning of key terms',
    heading: 'Meaning of key terms',
    body: /* html */ `
      <ol type="i">
        <li>
          <strong>“Consent”</strong> of the Data Subject means any freely given, specific, informed and unambiguous indication of the Data Subject&apos;s wishes by which he or she, through a statement or a clear affirmative action, signifies agreement to the processing of Personal Data relating to him or her.
        </li>
        <li>
          <strong>“Data”</strong> means characters, symbols and binary on which operations are performed by a computer, which may be stored or transmitted in the form of electronic signals, stored in any format or any device.
        </li>
        <li>
          <strong>“Data Controller”</strong> means a person who either alone, jointly with other persons or in common with other persons or a statutory body determines the purposes for and the manner in which Personal Data is processed or is to be processed. We are the Data Controller of all Personal Data used in our business for our own commercial purposes.
        </li>
        <li>
          <strong>“Data Processor”</strong> means a person or organization that processes Personal Data on behalf and on instructions of Suburban.
        </li>
        <li>
          <strong>“DPCO”</strong> means an organization registered by NITDA to provide data protection audit, compliance and training services to public and private organizations who process Personal Data in Nigeria.
        </li>
        <li>
          <strong>“Data Subject”</strong> for the purpose of this Policy means any person, who can be identified, directly or indirectly, by reference to an identification number or to one or more factors specific to his physical, physiological, mental, economic, cultural or social identity.
        </li>
        <li>
          <strong>“NITDA”</strong> means the National Information Technology Development Agency.
        </li>
        <li>
          <strong>“Processing”</strong> is any activity that involves use of the data. It includes obtaining, recording or holding the data, or carrying out any operation or set of operations on the data including organising, amending, retrieving, using, disclosing, erasing or destroying it. Processing also includes transferring personal data to third parties.
        </li>
        <li>
          <strong>“Personal Data”</strong> means any information relating to an identified or identifiable natural person (‘Data Subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. It can be anything from a name, address, a photo, an email address, bank details, posts on social networking websites, medical information, and other unique identifier such as but not limited to MAC address, IP address, IMEI number, IMSI number, SIM, Personal Identifiable Information (PII) and others.
        </li>
        <li>
          <strong>“Sensitive Personal Data”</strong> means data relating to religious or other beliefs, sexual orientation, health, race, ethnicity, political views, trades union membership, criminal records or any other sensitive personal information.
        </li>
        <li>
          <strong>“Regulation”</strong> means the Nigerian Data Protection Regulation, 2019.
        </li>
      </ol>
    `
  },
  {
    id: 'scope',
    label: 'Scope and application of the Policy',
    heading: 'Scope and application of the Policy',
    body: /* html */ `
      <p>
        This Policy applies to people working in or with our business and aims to ensure compliance with the Regulation. It applies specifically to all employees of Suburban, as well as to any external business partners (such as suppliers, contractors, vendors and other service providers) who receive, send, collect, access, or process Personal Data in any way on behalf of Suburban, including processing wholly or partly by automated means. This Policy also applies to third party Data Processors who process Personal Data received from Suburban.
      </p>
    `
  },
  {
    id: 'use-of-personal-data',
    label: 'Use of personal data',
    heading: 'Use of personal data and our purpose of data collected and processed',
    body: /* html */ `
      <h3>Personal Data we collect</h3>
      <ol>
        <li>Contact information such as name(s), telephone number, e-mail and address;</li>
        <li>Date of birth and gender, job title;</li>
        <li>Business/company name;</li>
        <li>Customer history;</li>
        <li>Contract billing and payment data;</li>
        <li>Demographic information such as postcode, preferences and interests;</li>
        <li>Financial information such as credit / debit card numbers;</li>
        <li>IP address (automatically collected);</li>
        <li>Web browser type and version (automatically collected).</li>
      </ol>
      <h3>Lawful bases for processing</h3>
      <ol type="a">
        <li>The Data Subject has given Consent to the processing of his/her Personal Data for one or more specific purposes;</li>
        <li>The processing is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract;</li>
        <li>Processing is necessary for compliance with a legal obligation to which Suburban is subject;</li>
        <li>Processing is necessary in order to protect the vital interests of the Data Subject or of another natural person; or</li>
        <li>Processing is necessary for the performance of a task carried out in the public interest or in exercise of official public mandate vested in Suburban.</li>
      </ol>
    `
  },
  {
    id: 'data-protection-principle',
    label: 'Data Protection Principle',
    heading: 'Data Protection Principle',
    body: /* html */ `
      <h3>Lawful, Fair, and Transparent Data Processing</h3>
      <p>
        We will ensure that processing of Personal Data is done fairly and without adversely affecting the rights of the Data Subject. We will also ensure that Personal Data collected and processed by or on behalf of Suburban must be in accordance with the specific, legitimate and lawful purpose consented to by the Data Subject, save where the processing is otherwise allowed by law or within other legal grounds recognized in the Regulation.
      </p>
      <h3>Processed for Specified, Explicit and Legitimate purposes</h3>
      <p>
        We will collect and process Personal Data including Data received directly from Data Subjects and Data received from third parties. We will only process Personal Data for the specific purposes set out in this Policy or for other purposes expressly permitted by the Regulation. The purposes for which we process Personal Data will be informed to Data Subjects at the time that their Personal Data is collected, where it is collected directly from them, or as soon as possible (not more than one calendar month) after collection where it is obtained from a third party.
      </p>
      <h3>Adequate, Relevant and Limited Data Processing</h3>
      <p>Suburban will only collect and process Personal Data for and to the extent necessary for the specific purpose(s) informed to Data Subjects.</p>
      <h3>Data Accuracy and Keeping Data Up to Date</h3>
      <p>
        Suburban shall ensure that all Personal Data collected and processed is kept accurate and up-to-date. The accuracy of Data shall be checked when it is collected and at annual intervals thereafter. Where any inaccurate or out-of-date data is found, all reasonable steps will be taken without delay to amend or erase that Data, as appropriate.
      </p>
      <h3>Timely processing and Data retention</h3>
      <p>
        Suburban shall not keep Personal Data for any longer than is necessary in light of the purposes for which that Data was originally collected and processed. When the Data is no longer required, all reasonable steps will be taken to erase it without delay, provided no law or regulation being in force requires Suburban to retain such Personal Data. Suburban shall pursuant to the Regulation, be entitled to retain and process Personal Data for archiving, scientific research, historical research or statistical purposes for public interest.
      </p>
      <h3>Secure Processing</h3>
      <p>
        Suburban shall ensure that all Personal Data collected and processed is kept secure and protected against unauthorised or unlawful processing and against accidental loss, destruction, damage, unauthorised viewing or access and from unauthorized changes to ensure that it is reliable and correct.
      </p>
      <h3>Accountability</h3>
      <p>
        We shall keep written internal records of all Personal Data collection, holding, and processing, which shall incorporate the information outlined in this section, including the purposes, categories, recipients, retention timelines, transfers and security measures adopted by the Company.
      </p>
    `
  },
  {
    id: 'data-subject-rights',
    label: 'Data Subject Rights',
    heading: 'Data Subject Rights',
    body: /* html */ `
      <p>All individuals who are the subject of Personal Data held by Suburban are entitled to the following rights:</p>
      <ol type="a">
        <li>The right to request for and access their Personal Data collected and stored;</li>
        <li>The right to request for restriction;</li>
        <li>The right to information on their Personal Data collected and stored;</li>
        <li>The right to object to automated decision making;</li>
        <li>The right to rectification and modification of their Data which Suburban keeps;</li>
        <li>The right to restrict processing of their information except as required by law or Suburban’s statutory obligations;</li>
        <li>The right to request erasure/deletion of their data, except as restricted by law or Suburban’s statutory obligations; and</li>
        <li>The right to data portability.</li>
      </ol>
    `
  },
  {
    id: 'consent-privacy',
    label: 'Consent/Privacy',
    heading: 'Consent/Privacy of Data Subject',
    body: /* html */ `
      <p>Suburban shall ensure that the following information is provided to every Data Subject when Personal Data is collected:</p>
      <ol type="a">
        <li>The specific purpose(s) for which the Personal Data is being collected and will be processed as well as the legal basis justifying that collection and processing;</li>
        <li>Where the personal data is not obtained directly from the Data Subject, the categories of Personal Data collected and processed;</li>
        <li>What constitutes the Data Subject’s consent;</li>
        <li>Where the Personal Data is to be transferred to one or more third parties, details of those parties;</li>
        <li>The technical methods used to collect and store the information;</li>
        <li>Available remedies in the event of violation of the Policy and the timeframe for remedy; and</li>
        <li>Adequate information in order to initiate the process of exercising their privacy rights, such as access to, rectification and deletion of Personal Data.</li>
      </ol>
      <p>The information set out above shall be provided to the Data Subject in any medium through which the Data is being collected.</p>
    `
  },
  {
    id: 'transfer-of-data',
    label: 'Transfer of Data',
    heading: 'Transfer of Personal Data',
    body: /* html */ `
      <h3>Third Party Processor within Nigeria</h3>
      <p>
        Suburban may engage the services of third parties in order to process the Personal Data of Data Subjects collected by us. The processing by such third parties shall be governed by a written contract with Suburban to ensure adequate protection and security measures are put in place by the third party for the protection of Personal Data in accordance with the terms of this Policy and the Regulation.
      </p>
      <h3>Transfer of Personal Data to a Foreign Country</h3>
      <p>
        Where Personal Data is to be transferred to a country outside Nigeria, Suburban shall put in adequate measures to ensure the security of such Personal Data. In particular, Suburban shall, among other things, conduct a detailed assessment of whether the said country is on the NITDA White List of countries with adequate data protection laws.
      </p>
      <p>Suburban will only transfer Personal Data out of Nigeria when one of the following applies:</p>
      <ol type="a">
        <li>Consent of the Data Subject has been obtained;</li>
        <li>The transfer is necessary for the performance of a contract between Suburban and the Data Subject or implementation of pre-contractual measures taken at the Data Subject’s request;</li>
        <li>The transfer is necessary to conclude a contract between Suburban and a third party in the interest of the Data Subject;</li>
        <li>The transfer is necessary for reason of public interest;</li>
        <li>The transfer is for the establishment, exercise or defence of legal claims; or</li>
        <li>The transfer is necessary in order to protect the vital interests of the Data Subjects or other persons, where the Data Subject is physically or legally incapable of giving consent.</li>
      </ol>
      <p>
        Where the recipient country is not on the White List and none of the conditions stipulated in this Policy is met, Suburban will engage with NITDA and the Office of the Honourable Attorney General of the Federation for approval with respect to such transfer.
      </p>
    `
  },
  {
    id: 'data-security',
    label: 'Data Security',
    heading: 'Data Security',
    body: /* html */ `
      <p>
        All Personal Data must be kept securely and should not be stored any longer than necessary. Suburban will ensure that appropriate measures are employed against unauthorized access, accidental loss, damage and destruction to data; this includes the use of password-encrypted databases for digital storage and locked cabinets for those using paper form.
      </p>
      <p>To ensure security of Personal Data, Suburban will, among other things, implement the following technical controls:</p>
      <ol type="a">
        <li>Industry-accepted hardening standards for workstations, servers, and databases;</li>
        <li>Full disk software encryption on all corporate workstation/laptops operating systems drives storing Personal and Sensitive Data;</li>
        <li>Encryption at rest including key management of key databases;</li>
        <li>Enable Security Audit Logging across all systems managing Personal Data;</li>
        <li>Restrict the use of removable media such as USB flash, disk drives;</li>
        <li>Anonymization techniques on testing environments; and</li>
        <li>Physical access control where Personal Data are stored in hardcopy.</li>
      </ol>
    `
  },
  {
    id: 'data-protection-officer',
    label: 'Data Protection Officer',
    heading: 'Data Protection Officer',
    body: /* html */ `
      <p>
        In accordance with the Regulation, we have appointed a Data Protection Officer (DPO) responsible for overseeing the Company’s data protection strategy and its implementation to ensure compliance with the requirements in the Regulations. The DPO is knowledgeable in data privacy and protection principles and is familiar with the provisions of the NDPR.
      </p>
      <p>
        <strong>The Data Protection Officer</strong><br />
        Suburban Fiber Company Limited<br />
        15 Bangui Street, off Adetokunbo Ademola Crescent, Wuse II<br />
        Abuja, Nigeria<br />
        <a href="mailto:dataprotection.officer@suburbanfiberco.com">dataprotection.officer@suburbanfiberco.com</a>
      </p>
    `
  },
  {
    id: 'data-breach-management',
    label: 'Data Breach Management',
    heading: 'Data Breach Notification/Management',
    body: /* html */ `
      <ol type="a">
        <li>
          All Personal Data breaches must be reported immediately to the Company’s data protection officer. If a Personal Data breach occurs and that breach is likely to result in a risk to the rights and freedoms of Data subjects (e.g. financial loss, breach of confidentiality, discrimination, reputational damage, or other significant social or economic damage), the data protection officer must ensure that the appropriate authorities are informed without delay, and in any event, within 72 hours after having become aware of it.
        </li>
        <li>
          In the event that a personal data breach is likely to result in a high risk to the rights and freedoms of data subjects, the data protection officer must ensure that all affected data subjects are informed of the breach directly and without undue delay.
        </li>
      </ol>
      <p>Data breach notifications shall include the following information:</p>
      <ol>
        <li>The categories and approximate number of data subjects concerned;</li>
        <li>The categories and approximate number of personal data records concerned;</li>
        <li>The name and contact details of the Company’s data protection officer (or other contact point where more information can be obtained);</li>
        <li>The likely consequences of the breach; and</li>
        <li>Details of the measures taken, or proposed to be taken, by the Company to address the breach including, where appropriate, measures to mitigate its possible adverse effects.</li>
      </ol>
    `
  },
  {
    id: 'training',
    label: 'Training',
    heading: 'Training',
    body: /* html */ `
      <p>
        Suburban shall ensure that employees who collect, access and process Personal Data receive adequate data privacy and protection training in order to develop the necessary knowledge, skills and competence required to effectively manage the compliance framework under this Policy and the Regulation with regard to the protection of Personal Data. On an annual basis, Suburban shall develop a capacity building plan for its employees on data privacy and protection in line with the Regulations.
      </p>
    `
  },
  {
    id: 'data-protection-audit',
    label: 'Data Protection Audit',
    heading: 'Data Protection Audit',
    body: /* html */ `
      <p>
        Suburban shall conduct an annual data protection audit through a licensed Data Protection Compliance Organization (DPCO) to verify Suburban’s compliance with the provisions of the Regulations and other applicable data protection laws. The audit report will be certified and filed by the DPCO to NITDA as required under the Regulations.
      </p>
    `
  },
  {
    id: 'data-privacy-impact',
    label: 'Data Privacy Impact Assessments',
    heading: 'Data Privacy Impact Assessments',
    body: /* html */ `
      <p>
        The Company shall carry out Privacy Impact Assessments when and as required under the Regulation. Privacy Impact Assessments shall be overseen by the Company’s data protection officer and shall address the following areas of importance:
      </p>
      <ol type="a">
        <li>The purpose(s) for which personal data is being processed and the processing operations to be carried out on that data;</li>
        <li>Details of the legitimate interests being pursued by the Company;</li>
        <li>An assessment of the necessity and proportionality of the data processing with respect to the purpose(s) for which it is being processed.</li>
      </ol>
    `
  },
  {
    id: 'our-other-obligations',
    label: 'Our Other Obligations',
    heading: 'Our Other Obligations',
    body: /* html */ `
      <p>The Company shall ensure that the following measures are taken with respect to the collection, holding, and processing of Personal Data:</p>
      <ol type="a">
        <li>All employees, agents, contractors, or other parties working on behalf of the Company shall be made fully aware of both their individual responsibilities and the Company’s responsibilities under the Regulation and under this Policy, and shall be provided with a copy of this Policy;</li>
        <li>Only employees, agents, sub-contractors, or other parties working on behalf of the Company that need access to, and use of, personal data in order to carry out their assigned duties correctly shall have access to Personal Data held by the Company;</li>
        <li>All employees, agents, contractors, or other parties working on behalf of the Company handling personal data will be appropriately trained and supervised;</li>
        <li>Methods of collecting, holding and processing personal data shall be regularly evaluated, reviewed, and documented;</li>
        <li>All employees, agents, contractors, or other parties working on behalf of the Company handling personal data will be bound to do so in accordance with the principles of the Regulation and this Policy by contract;</li>
        <li>Where any agent, contractor or other party working on behalf of the Company handling Personal Data fails in their obligations under this Policy that party shall indemnify and hold harmless the Company against any costs, liability, damages, loss, claims or proceedings which may arise out of that failure.</li>
      </ol>
    `
  },
  {
    id: 'changes-to-policy',
    label: 'Changes to this Policy',
    heading: 'Changes to this Policy',
    body: /* html */ `
      <p>
        We may update this Policy from time to time and we will notify you of any changes by posting the new or updated policy. If we amend this Policy, we will provide you with the updated version. Thus, you are advised to review this page periodically for any changes as any such changes will be effective, immediately after they are posted on this page.
      </p>
    `
  },
  {
    id: 'contact-us',
    label: 'Contact us',
    heading: 'Contact us',
    body: /* html */ `
      <p>
        If you have any questions or suggestions about this Policy, do not hesitate to contact us at <a href="tel:09087812002">09087812002</a>, or using the ‘contact us’ form on our website.
      </p>
      <p>You can also contact us in writing at <a href="mailto:info@suburbanfiberco.com">info@suburbanfiberco.com</a>.</p>
    `
  }
]

const activeSection = ref(sections[0].id)
const selectedSection = ref(sections[0].id)

const scrollTo = async (id) => {
  const target = document.getElementById(id)
  if (!target) return
  await nextTick()
  const offset = target.getBoundingClientRect().top + window.scrollY - 120
  window.scrollTo({ top: offset, behavior: 'smooth' })
}

let observer

onMounted(() => {
  const options = { root: null, threshold: 0.3 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
        selectedSection.value = entry.target.id
      }
    })
  }, options)

  sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.privacy-policy {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #111827;
  min-height: 100vh;
}
.hero {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: clamp(5rem, 8vw, 6.5rem) 1.5rem clamp(4rem, 6vw, 4.5rem);
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%);
}
.hero__inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}
.hero__card {
  width: 100%;
  max-width: 1200px;
  border-radius: clamp(1.75rem, 3.5vw, 2.5rem);
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%);
  box-shadow: 0 32px 64px rgba(220, 38, 38, 0.25), 0 16px 32px rgba(239, 68, 68, 0.15);
  padding: clamp(2rem, 5.5vw, 3.5rem);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.hero__card-eyebrow {
  display: inline-block;
  margin-bottom: 0.75rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  backdrop-filter: blur(10px);
}
.hero__title {
  text-transform: none;
  font-size: clamp(1.7rem, 3vw, 2.6rem);
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 1.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.hero__subtitle {
  margin: 0 auto;
  max-width: 640px;
  font-size: clamp(1rem, 1.25vw, 1.0625rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.layout {
  display: grid;
  grid-template-columns: minmax(0, 260px) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(3rem, 5vw, 4rem) 1.5rem clamp(5rem, 8vw, 6rem);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.toc {
  display: none;
}
.toc__inner {
  position: sticky;
  top: 120px;
  border-left: 2px solid rgba(220, 38, 38, 0.2);
  padding-left: 1.5rem;
}
.toc__heading {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  color: #ef4444;
  margin-bottom: 1.5rem;
}
.toc__nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.toc__item {
  border: 0;
  background: transparent;
  text-align: left;
  padding: 0.5rem 0;
  font-size: 0.95rem;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s ease;
}
.toc__item--active {
  color: #dc2626;
  font-weight: 600;
}
.toc__item:hover {
  color: #ef4444;
}
.content {
  max-width: 740px;
}
.content__mobile-nav {
  margin-bottom: 2rem;
  display: none;
}
.content__mobile-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.5rem;
  display: block;
}
.content__mobile-select {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
}
.content__section {
  scroll-margin-top: 120px;
  border-bottom: 1px solid rgba(241, 245, 249, 0.5);
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.content__section:hover {
  background: rgba(255, 255, 255, 0.6);
}
.content__section:last-of-type {
  border-bottom: 0;
}
.content__heading {
  font-size: clamp(1.65rem, 3vw, 2.1rem);
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}
.content__body :deep(p) {
  margin-bottom: 1.25rem;
  color: #4b5563;
  line-height: 1.8;
}
.content__body :deep(ol),
.content__body :deep(ul) {
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
  color: #4b5563;
}
.content__body :deep(ol li + li),
.content__body :deep(ul li + li) {
  margin-top: 0.75rem;
}
.content__body :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
}
.content__body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  display: block;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
}
.content__body :deep(table thead) {
  background: #f8fafc;
}
.content__body :deep(table th),
.content__body :deep(table td) {
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  white-space: nowrap;
  font-size: 0.95rem;
}
.content__body :deep(a) {
  color: #dc2626;
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .toc {
    display: block;
  }
}

@media (max-width: 1023px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .content__mobile-nav {
    display: block;
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero__card {
    padding: clamp(1.75rem, 8vw, 2.75rem);
    border-radius: 1.75rem;
  }
  .hero__card-eyebrow {
    letter-spacing: 0.25em;
  }
  .content__section {
    padding: 1.25rem;
    margin-bottom: 1rem;
  }
  .content__body :deep(th),
  .content__body :deep(td) {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
    white-space: normal;
    word-wrap: break-word;
  }
  .layout {
    padding: clamp(2rem, 4vw, 3rem) 1rem clamp(3rem, 6vw, 4rem);
    gap: clamp(1.5rem, 3vw, 2rem);
  }
}

@media (max-width: 640px) {
  .hero {
    padding: clamp(3rem, 8vw, 4rem) 1rem clamp(2rem, 6vw, 3rem);
  }
  .hero__inner {
    padding: 0;
  }
  .hero__card {
    border-radius: 1.5rem;
    padding: clamp(1.5rem, 6vw, 2.5rem);
  }
  .hero__card-eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
  }
  .hero__title {
    font-size: clamp(1.4rem, 5vw, 2rem);
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  .hero__subtitle {
    font-size: clamp(0.9rem, 1vw, 1rem);
    line-height: 1.6;
  }
  .layout {
    padding: 2rem 1rem 3rem;
    gap: 1.5rem;
  }
  .content__section {
    padding: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 0.75rem;
  }
  .content__heading {
    font-size: clamp(1.4rem, 4vw, 1.8rem);
    margin-bottom: 1rem;
  }
  .content__body :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  .content__body :deep(ol),
  .content__body :deep(ul) {
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  .content__body :deep(table) {
    border-radius: 0.5rem;
    font-size: 0.8rem;
  }
  .content__body :deep(table th),
  .content__body :deep(table td) {
    padding: 0.5rem;
    min-width: 80px;
  }
}
</style>
