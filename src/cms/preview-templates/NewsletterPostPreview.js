import React from 'react'
import { NewsletterPostTemplate } from '../../templates/newsletter-post'

const NewsletterPostPreview = ({ entry, widgetFor }) => (
  <NewsletterPostTemplate
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default NewsletterPreview
