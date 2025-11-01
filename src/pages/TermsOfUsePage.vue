<template>
  <div class="terms-page">
    <Navbar />
    <header class="hero">
      <div class="hero__inner">
        <div class="hero__card">
           <p class="hero__card-eyebrow">Terms &amp; Conditions</p>
          <h1 class="hero__title">Service Terms and Conditions</h1>
          <p class="hero__subtitle">Service Terms and Conditions of the Suburban Fiber</p>
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
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import Navbar from '../components/sections/Navbar.vue'
import Footer from '../components/sections/Footer.vue'

const sections = [
  {
    id: 'definitions',
    label: 'Definitions',
    heading: 'Definitions',
    body: /* html */ `
      <p><strong>Activation Date</strong> shall mean the date on which Suburban makes the Service(s) available to the Customer.</p>
      <p><strong>Agreement</strong> shall mean this Suburban Service Terms and Conditions for the provision of IP leased circuit between Suburban and Customer as well as any applicable Service Order Form, Service Level Agreement and any other addenda, schedules, or exhibits attached hereto and/or incorporated herein by reference.</p>
      <p><strong>Help-Desk</strong> shall mean the interface point for Customer to access Suburban's support and maintenance facilities.</p>
      <p><strong>IP</strong> shall mean internet protocol.</p>
      <p><strong>Minimum Service Term</strong> shall mean a period of one (1) year.</p>
      <p><strong>ODF</strong> shall mean Optical Distribution Frame used to terminate the fibre optic cable to allow connection of transmission equipment.</p>
      <p><strong>Performance Target(s)</strong> shall mean a set of measurement(s) that determine the quality and availability of the System as defined in Service Level Annexure.</p>
      <p><strong>Permanent Resolution Time</strong> shall mean the time measured between the call from the Customer to report a Problem to the Help Desk and the time when Suburban provides a definitive solution to return the System to its normal operating condition.</p>
      <p><strong>Problem/Fault</strong> shall mean the non-conformity of the System with the technical specifications. Three (3) severity levels are defined in this regard and are described in the Annexure hereto: critical, major and minor.</p>
      <p><strong>Response Time</strong> shall mean the time measured between the call from the Customer to report a problem to the Help Desk and the time Suburban responds to the Customer.</p>
      <p><strong>Restore Time</strong> or <strong>Restoration Time</strong> shall mean the time measured between the call from the Customer to report a problem to the Help Desk and the time when Suburban returns the System to such operating condition that it does not affect nor degrade the Service.</p>
      <p><strong>Service(s)</strong> shall mean the range of services provided by Suburban to the Customer in accordance with the terms and conditions of this Agreement.</p>
      <p><strong>Service Request Form</strong> shall mean the document so entitled executed by Suburban and the Customer and setting out the specifications of the Service(s) to be provided in accordance with the terms and conditions of this Agreement.</p>
      <p><strong>Service Term</strong> shall mean the term selected by the Customer for the Service which shall not be less than a minimum period of one (1) year.</p>
      <p><strong>Sub-Contractor</strong> shall mean any person, firm or company named by Suburban to provide any part of the Services under the Agreement.</p>
      <p><strong>System(s)</strong> shall mean any combination of hardware and/or software used to perform a function or any part of the Services by Suburban.</p>
      <p><strong>Suburban Network</strong> shall mean the terrestrial fibre network, resources and equipment and related infrastructure installed by Suburban along various telecommunications ducts located within the Federal Capital Territory, Abuja for the provision of the Services.</p>
    `
  },
  {
    id: 'scope',
    label: 'Scope',
    heading: 'Scope of the Services',
    body: /* html */ `
      <ol>
        <li>Suburban agrees to provide the Customer with IP capacity over its optical fibre network and any other routes as may be requested by Customer from time to time.</li>
        <li>Parties understand and agree that the Customer shall nominate and appoint a dedicated technical person who will communicate and work alongside Suburban's team for the diagnosis and resolution of the Customer's technical issues. Suburban may provide support and guidance as necessary for the resolution of such technical issues the Customer may experience.</li>
      </ol>
    `
  },
  {
    id: 'provisions',
    label: 'Provisions',
    heading: 'Provision of the Service',
    body: /* html */ `
      <ol>
        <li>Unless provided otherwise in the relevant Service Request Form, Suburban will deliver the Services to the Customer fourteen (14) to twenty-one (21) working days from the date of acceptance of this Terms and Conditions and/or the execution of the relevant Service Request Form. Any changes thereafter by Suburban will be properly communicated to the Customer. Any request for an upgrade or downgrade of the Service(s) delivered shall be documented through an additional Service Request Form to be executed by the Parties.</li>
        <li>Installation of the Services may take a longer period of time than advertised or indicated by Suburban and as such, Suburban will not be liable for any loss occasioned by such delay. Suburban's ability to complete the installation of and provision of the Services expediently will depend on the Customer's availability and ability to provide access to the service location for Suburban's employees and agents. Suburban shall not be responsible or liable for any loss occasioned by such delay.</li>
        <li>Suburban shall proceed with the installation of the Services provided that it has received from the Customer all necessary contractual documents and technical information, and support that it deems necessary. Where the conditions above have not been met, Suburban at its sole discretion may cancel the installation of the Service and/or the Service Request Form prior to the Activation Date upon providing notice to the Customer.</li>
        <li>In no event shall Suburban be responsible for any Service impairment or loss of functionality, or breach of any performance obligation under this Agreement where any Service failure, fault or delay in performance is directly or indirectly related to any failure by the Customer to provide access to the service location and/or necessary equipment for the installation of the Service.</li>
      </ol>
    `
  },
  {
    id: 'terms',
    label: 'Terms',
    heading: 'Terms of Agreement',
    body: /* html */ `
      <ol>
        <li>The Customer's subscription to the Services shall be for a Minimum Service Term of one (1) year commencing on the Activation Date (the "Initial Term") and the Customer shall remain bound by this Agreement for the duration of the Minimum Service Term.</li>
        <li>Following the Minimum Service Term, this Agreement shall automatically renew for a further period of one (1) year at the expiration of each one (1) year term provided a Party does not send a written notice of intention to terminate the Agreement.</li>
      </ol>
    `
  },
  {
    id: 'termination',
    label: 'Termination',
    heading: 'Termination',
    body: /* html */ `
      <ol>
        <li>The Customer may terminate the Agreement after the Minimum Service Term upon the issuance of thirty (30) days written notice to Suburban. The Services and this Agreement shall terminate upon expiration of the notice period.</li>
        <li>Where Customer terminates the Service Request Form and this Agreement prior to the completion of the Minimum Service Term, the Customer shall pay to Suburban all outstanding Service Fees for any portion of the Services rendered.</li>
        <li>Where the Customer terminates a Service Request Form prior to the Activation Date of the Service, the Customer shall reimburse Suburban for all reasonable costs incurred by Suburban in the implementation of the Service to be terminated.</li>
        <li>Where this Agreement is terminated in accordance with this Clause, Suburban reserves the right to solely determine whether or not to refund any payment made under this Agreement.</li>
        <li>Suburban reserves the right to immediately suspend the provision of the Services and/or terminate this Agreement by giving thirty (30) days' notice of such termination to the Customer where: (a) Customer has failed to make payments in accordance with this Agreement; (b) Customer has breached any condition of this Agreement or the Terms and Conditions; or (c) Suburban suspects the Customer has carried on fraudulent or any unauthorised activity.</li>
        <li>If Suburban terminates the Services on account of non-payment and/or breach of the Terms and Conditions or this Agreement, the Customer may be required to pay a reconnection fee for reconnection of the Service.</li>
        <li>Upon termination of this Agreement for any reason whatsoever, Suburban shall be entitled to recover gateways, routers and fibre cables installed at each of the Service Locations pursuant to this Agreement.</li>
      </ol>
    `
  },
  {
    id: 'payment',
    label: 'Payment',
    heading: 'Payment',
    body: /* html */ `
      <ol>
        <li>Customer shall pay Suburban the amount stated in the relevant invoice as consideration for Suburban's provision of the Services ("Service Fee").</li>
        <li>The fees for the Services are fixed and non-variable for the duration of this Agreement. Unless otherwise stated, the fees exclude Value Added Tax (VAT), Withholding tax and all other taxes imposed in Nigeria on the provision of the Services.</li>
        <li>Suburban shall present monthly invoices to Customer specifying the particulars of the Services to which it relates.</li>
        <li>Where the Customer accepts the invoiced amount contained in Suburban's invoice, it shall pay the said amount on the due date stated on the invoice.</li>
        <li>Customer shall not be entitled to a claim for a refund of the payment made, notwithstanding any termination or suspension of the Services, or any relocation by the Customer before the end of the period covered by the payment made.</li>
        <li>Suburban may, after the Minimum Term, revise the Service Fee by giving the Customer no less than one (1) month’s notice in writing of any such revision. If such revision is not acceptable to the Customer, it may terminate this Agreement by giving thirty (30) days written notice to Suburban.</li>
      </ol>
    `
  },
  {
    id: 'service-levels',
    label: 'Service Levels',
    heading: 'Service Levels and Terms',
    body: /* html */ `
      <ol>
        <li>Suburban shall provide service availability in accordance with the Service Level Annexure to this Agreement, failing which the Customer will be compensated for the lost period where the service was interrupted.</li>
        <li>Any service interruption of the capacity leased to Customer hereunder shall give rise to compensation in airtime credit to Customer in accordance with the Service Level Annexure. No allowance for compensation will be provided for any interruption caused by: the Customer or its representatives; planned maintenance duly communicated; or local loop issues within the Customer's premises.</li>
        <li>Service claims are subject to conditions including timely written notification, calculations based on the month of occurrence, application at month end, and settlement of outstanding amounts.</li>
        <li>Suburban agrees to notify Customer in good faith of any Service interruptions, failures or violations of which it is aware.</li>
        <li>The following outages shall not be counted as unavailable time for the purpose of calculating service availability: force majeure events and cable cuts; planned maintenance; or outages caused by faults at the customer end or part of the circuit not maintained by Suburban.</li>
      </ol>
      <h3>Service Level Annexure</h3>
      <h4>Service Delivery</h4>
      <p>The standard installation interval for a new connection to the Service is stated in the Agreement.</p>
      <h4>Performance Targets</h4>
      <p>Service Provider guarantees at least 99.0% availability of the Services. This guaranteed percentage is calculated excluding any outages that take place in accordance with this Agreement.</p>
      <h4>Service Credits</h4>
      <p>If Service Provider fails to meet the described service levels for guaranteed availability, Customer will be entitled to Service Credits:</p>
      <ul>
        <li>99% – 98%: 1 day free service</li>
        <li>98% – 95%: 2 days free service</li>
        <li>95% – 90%: 3 days free service</li>
        <li>90% – 80%: 1 week free service</li>
      </ul>
      <p>Service Credits shall be Customer's sole and exclusive remedy with regards to the failure of the Service to comply with the guaranteed service level.</p>
      <h4>Fault Response and Restoration</h4>
      <p>Service Provider aims to meet or better the following response times. Mean Time to Repair (MTTR) runs from when the call is placed with Service Provider by Customer.</p>
      <table>
        <thead>
          <tr>
            <th>Fault Category</th>
            <th>Diagnostic Time</th>
            <th>Mean Time to Repair</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emergency</td>
            <td>30 minutes</td>
            <td>2 hours</td>
          </tr>
          <tr>
            <td>Major Fault</td>
            <td>30 minutes</td>
            <td>6 hours</td>
          </tr>
            <td>Minor Fault</td>
            <td>60 minutes</td>
            <td>36 hours</td>
          </tr>
        </tbody>
      </table>
      <p>Should a fault be raised outside normal working hours and declared as Minor, MTTR shall not commence until the following working day. Planned outages are not included in these performance figures.</p>
      <h4>Planned Outages</h4>
      <p>The planned outage window is daily from 01:00 to 04:00 (local time to the exchange). Service Provider will provide five working days' notification of any scheduled maintenance. Customer scheduled maintenance requires five hours prior notice. Emergency maintenance may occur without prior notice, with best-effort notification.</p>
      <h4>Incident Classification</h4>
      <p>Incident classification is mutually agreed, with Service Provider resolving disagreements and able to reclassify during repairs.</p>
      <table>
        <thead>
          <tr>
            <th>Fault Classification</th>
            <th>Impact</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emergency</td>
            <td>Faults which render the service unusable</td>
            <td>Total loss of connectivity</td>
          </tr>
          <tr>
            <td>Major</td>
            <td>Faults which significantly degrade service</td>
            <td>Incomplete routing table, packet or signal loss</td>
          </tr>
          <tr>
            <td>Minor</td>
            <td>Minor degradations or non-service affecting issues</td>
            <td>Non major routing issues, technical queries, requests for change</td>
          </tr>
        </tbody>
      </table>
      <h4>Fault Escalation</h4>
      <p>If a problem is not addressed satisfactorily, escalation is available according to the following sequence.</p>
      <table>
        <thead>
          <tr>
            <th>Contact Level</th>
            <th>Function &amp; Name(s)</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st Level</td>
            <td>CRM</td>
            <td><a href="mailto:crm@suburbanfiberco.com">crm@suburbanfiberco.com</a></td>
            <td><a href="tel:09087812002">09087812002</a></td>
          </tr>
          <tr>
            <td>2nd Level</td>
            <td>NOC Faults</td>
            <td><a href="mailto:nocfaults@suburbanfiberco.com">nocfaults@suburbanfiberco.com</a></td>
            <td><a href="tel:09087812001">09087812001</a></td>
          </tr>
          <tr>
            <td>3rd Level</td>
            <td>HOD, NOC / Aliyu Usman</td>
            <td><a href="mailto:a.usman@suburbanfiberco.com">a.usman@suburbanfiberco.com</a></td>
            <td><a href="tel:08036591714">08036591714</a></td>
          </tr>
          <tr>
            <td>4th Level</td>
            <td>GCOO / Suleiman Arzika</td>
            <td><a href="mailto:s.arzika@suburbanfiberco.com">s.arzika@suburbanfiberco.com</a></td>
            <td><a href="tel:08181118880">08181118880</a></td>
          </tr>
        </tbody>
      </table>
      <p>Escalation starts once the issue has been logged and the fault confirmed by the Network Operations Center. You can also contact us in writing at <a href="mailto:info@suburbanfiberco.com">info@suburbanfiberco.com</a>.</p>
      <table>
        <thead>
          <tr>
            <th>Escalation Level</th>
            <th>Emergency or Major Fault</th>
            <th>Minor Fault</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st level</td>
            <td>Immediate</td>
            <td>Immediate</td>
          </tr>
          <tr>
            <td>2nd level</td>
            <td>Immediate</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>3rd level</td>
            <td>Immediate</td>
            <td>16 hours</td>
          </tr>
          <tr>
            <td>4th level</td>
            <td>Immediate</td>
            <td>1 working day</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    id: 'exclusion',
    label: 'Exclusion of Service',
    heading: 'Exclusion of Services',
    body: /* html */ `
      <ol>
        <li>The Services rendered by Suburban do not include services or supplies required as a result of: (a) damage to the System(s) caused by Customer or a third party; (b) modifications, removals or obliteration of serial numbers or identifying marks by non-Suburban personnel; or (c) attempts to move, reinstall, repair, maintain or modify the System(s) by Customer or a third party.</li>
        <li>Suburban's liability to the Customer for failure to provide the Services in accordance with this Agreement shall be limited to the provision of the Services at no additional charge for a duration equivalent to that in which the Services were not provided when they ought to have been provided.</li>
      </ol>
    `
  },
  {
    id: 'confidentiality',
    label: 'Confidentiality',
    heading: 'Confidentiality',
    body: /* html */ `
      <p>All information of a technical or business nature disclosed by one Party to the other shall be regarded as confidential and shall only be disclosed in accordance with this clause. Each Party shall ensure that its personnel treat such information as confidential. Information shall be used only for the purpose for which it is delivered and only insofar as strictly necessary for the purposes of the Agreement.</p>
      <p>Either Party may disclose Confidential Information without consent where required by law, to related bodies corporate or Sub-contractors strictly for the purposes of the Agreement, or where the information is independently developed, already known, or becomes public otherwise than through breach of this Agreement.</p>
      <p>Where disclosure is made to a Sub-contractor, the disclosing Party shall ensure that the receiving Sub-contractor owes an obligation of confidentiality on terms identical to this clause and remains liable for any unauthorised disclosure. These obligations subsist for one (1) year from the termination of the Agreement.</p>
    `
  },
  {
    id: 'force-majeure',
    label: 'Force Majeure',
    heading: 'Force Majeure',
    body: /* html */ `
      <ol>
        <li>Neither Party shall be liable for failure to fulfil its obligations directly due to Force Majeure events beyond its reasonable control which cannot be foreseen or avoided, including war, riots, labour disputes, acts of government, cable cuts, natural catastrophes and similar events.</li>
        <li>The affected Party shall promptly notify the unaffected Party of the Force Majeure event and its cessation.</li>
        <li>If performance is only partially affected, the Party remains liable for the obligations not affected.</li>
        <li>If a Force Majeure event continues for more than one (1) month, the other Party may terminate the Agreement by written notice. Customer will pay for all Services performed until termination, subject to set-off for payments where Service was not rendered.</li>
      </ol>
    `
  },
  {
    id: 'intellectual-property',
    label: 'Intellectual Property',
    heading: 'Intellectual Property',
    body: /* html */ `
      <p>All legal and beneficial rights in software, copyright, trademark, or any other intellectual property which Suburban provides to the Customer for the purpose of using the Service(s) will remain at all times the property of Suburban or its owner or licensor. Suburban grants the Customer a non-exclusive, non-transferable licence to use such Intellectual Property solely for using the Service(s) as contemplated. The Customer may not reproduce, modify, adapt, translate, reverse engineer or disassemble the software or Intellectual Property.</p>
    `
  },
  {
    id: 'liability',
    label: 'Liability',
    heading: 'Limitation of Liability',
    body: /* html */ `
      <ol>
        <li>Suburban shall not be liable for: (a) loss or damage where there is no breach of contractual obligation or legal duty of care; (b) loss or damage caused by the Customer's use of the Services which was not contemplated; (c) loss of business, contracts, profits, anticipated savings, reputation, goods, revenue or use; or (d) any special, consequential or indirect losses.</li>
        <li>Neither Party excludes liability for death or personal injury resulting from its negligence or for wilful misconduct, including fraud.</li>
        <li>Suburban's liability for failure to provide the Services shall be limited to amounts payable by way of air time credit and shall not exceed one (1) month air credit time of the Services.</li>
      </ol>
    `
  },
  {
    id: 'sub-contractor',
    label: 'Sub-contractor',
    heading: 'Sub-contractor',
    body: /* html */ `
      <p>Suburban reserves the right to subcontract parts of the Services to third parties. The primary liability and responsibility for provision of the Services to Customer shall remain solely with Suburban.</p>
    `
  },
  {
    id: 'change-of-address',
    label: 'Change of Address',
    heading: 'Change of Address',
    body: /* html */ `
      <ol>
        <li>Customer shall notify Suburban immediately if its address changes, recognising that the Services are to be used at the service locations provided in the Service Request Form.</li>
        <li>Where the Customer relocates and the Services are not available at the new location, Customer may terminate this Agreement or renegotiate the Services to be provided.</li>
        <li>Suburban may charge the Customer for reasonable costs incurred in relocating the Services, with notification prior to invoicing.</li>
      </ol>
    `
  },
  {
    id: 'governing-law',
    label: 'Governing Law',
    heading: 'Governing Law and Arbitration',
    body: /* html */ `
      <ol>
        <li>This Agreement is governed by the laws of the Federal Republic of Nigeria.</li>
        <li>Disputes shall be settled amicably, failing which they shall be referred to arbitration in accordance with the Arbitration &amp; Conciliation Act, Cap. A18, Laws of the Federation of Nigeria, 2004.</li>
        <li>The arbitration shall be held in Abuja or such other place within Nigeria as agreed by the Parties. The award shall be final and binding except in instances of misconduct or error on the face of the award.</li>
      </ol>
    `
  },
  {
    id: 'notices',
    label: 'Notices',
    heading: 'Notices',
    body: /* html */ `
      <ol>
        <li>Notices shall be in writing and deemed delivered two (2) days after dispatch if sent by hand or courier, or upon receipt of automated confirmation if sent by email (or the next business day if sent after business hours).</li>
        <li>Notices to the Customer shall be sent to the address provided in the Service Request Form. Notices to Suburban shall be sent to the address specified in the Service Request Form or via email to <a href="mailto:crm@suburbanfiberco.com">crm@suburbanfiberco.com</a>.</li>
      </ol>
    `
  },
  {
    id: 'assignment',
    label: 'Assignment',
    heading: 'Assignment',
    body: /* html */ `
      <p>Suburban reserves the right to transfer its rights and obligations under this Agreement to any company, firm or person. The Agreement is personal to the Customer, who may not transfer its rights to a third party.</p>
    `
  },
  {
    id: 'amendment',
    label: 'Amendment',
    heading: 'Amendment',
    body: /* html */ `
      <p>Suburban reserves the right to amend or modify this Agreement and any applicable Terms and Conditions at any time. Suburban will notify the Customer of any amendment or modification of this Agreement.</p>
    `
  },
  {
    id: 'insurance',
    label: 'Insurance',
    heading: 'Insurance',
    body: /* html */ `
      <p>Each Party shall maintain appropriate insurance against loss, damage, claims or actions arising out of the performance of its obligations, including coverage for personal injury or death, public liability, equipment loss and any other legally required liability.</p>
    `
  },
  {
    id: 'third-parties',
    label: 'Third Parties',
    heading: 'Third Parties',
    body: /* html */ `
      <p>This Agreement is intended solely for the benefit of Suburban and the Customer and does not confer any rights or impose obligations on any person not a party to this Agreement.</p>
    `
  },
  {
    id: 'severability',
    label: 'Severability',
    heading: 'Severability',
    body: /* html */ `
      <p>If any provision of this Agreement is held to be illegal, invalid or unenforceable, that provision shall be deemed not to form part of the Agreement and the remaining provisions shall remain in full force.</p>
    `
  },
  {
    id: 'data-protection',
    label: 'Data Protection',
    heading: 'Data Protection',
    body: /* html */ `
      <p>Suburban shall treat Customer information in confidence and shall not disclose such information to a third party except where required by law. Where disclosure is made, Suburban shall ensure the third party is bound by a similar data protection obligation.</p>
      <p>Each Party undertakes to comply with applicable privacy laws, including the Nigeria Data Protection Regulation 2019 and Suburban's Data Protection and Privacy Policy available at <a href="https://suburbanfiberco.com/privacy-policy" target="_blank" rel="noopener">https://suburbanfiberco.com/privacy-policy</a>.</p>
    `
  },
  {
    id: 'general',
    label: 'General',
    heading: 'General',
    body: /* html */ `
      <p>This Agreement constitutes the sole agreement between the Parties regarding the subject matter. Nothing herein shall constitute a partnership, joint venture, agency or employment between the Parties, and neither Party shall have authority to bind the other for any purpose.</p>
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
.terms-page {
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
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}
.hero__card {
  width: 100%;
  max-width: 880px;
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
    padding-bottom: 2.25rem;
  }
  .content__body :deep(th),
  .content__body :deep(td) {
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: clamp(4rem, 10vw, 5rem) 1.25rem clamp(3rem, 8vw, 4rem);
  }
  .hero__inner {
    padding: 0;
  }
  .hero__card {
    border-radius: 1.5rem;
  }
  .hero__card-eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
  }
  .hero__title {
    font-size: clamp(1.5rem, 6vw, 2.2rem);
    line-height: 1.35;
  }
  .layout {
    padding: 2.5rem 1.25rem 4rem;
  }
  .content__heading {
    font-size: clamp(1.5rem, 5vw, 1.9rem);
  }
  .content__body :deep(table) {
    border-radius: 0.75rem;
  }
}
</style>
