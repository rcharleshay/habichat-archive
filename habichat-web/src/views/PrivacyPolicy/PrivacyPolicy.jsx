import React from 'react'
import config from 'config'
import Helmet from 'components/Helmet/Helmet'
import { recordPageView } from 'utils/datalayer'
import * as S from './styles/privacyPolicy.style'

const PrivacyPolicy = () => {
  recordPageView('Privacy Policy Page')
  return (
    <S.PrivacyPolicy>
      <Helmet seo={config.seo.privacyPolicy} />
      <h2>Our Privacy Policy</h2>
      <p>
        <span>
          Your privacy is important to us. It is Habichat's policy to respect your privacy regarding
          any information we may collect from you across our website,{' '}
        </span>
        <a href="https://habi.chat">https://habi.chat</a>
        <span>, and our app.</span>
      </p>
      <p>
        We only ask for personal information when we truly need it to provide a service to you. We
        collect it by fair and lawful means, with your knowledge and consent. We also let you know
        why we’re collecting it and how it will be used.
      </p>
      <p>
        We only retain collected information for as long as necessary to provide you with your
        requested service. What data we store, we’ll protect within commercially acceptable means to
        prevent loss and theft, as well as unauthorised access, disclosure, copying, use or
        modification.
      </p>
      <p>
        We don’t share any personally identifying information publicly or with third-parties, except
        when required to by law.
      </p>
      <p>
        Our website may link to external sites that are not operated by us. Please be aware that we
        have no control over the content and practices of these sites, and cannot accept
        responsibility or liability for their respective privacy policies.
      </p>
      <p>
        You are free to refuse our request for your personal information, with the understanding
        that we may be unable to provide you with some of your desired services.
      </p>
      <p>
        Your continued use of our website will be regarded as acceptance of our practices around
        privacy and personal information. If you have any questions about how we handle user data
        and personal information, feel free to contact us.
      </p>
      <p>This policy is effective as of 1 August 2019.</p>
      <p>- Team Habichat</p>
    </S.PrivacyPolicy>
  )
}

export default PrivacyPolicy
