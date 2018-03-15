import React from 'react'
import { NewsletterTemplate } from '../../templates/newsletter'

const NewsletterPreview = ({ entry, widgetFor }) => (
  <NewsletterTemplate
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default NewsletterPreview
