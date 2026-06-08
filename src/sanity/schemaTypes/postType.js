import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      placeholder:"Select",
      options: {
        list: [
          {title: 'Customization', value: 'customization'},
          {title: 'Dedicated Resources', value: 'dedicated-resources'},
          {title: 'Implementation', value: 'implementation'},
          {title: 'Integration', value: 'integration'},
          {title: 'Migration', value: 'migration'},
          {title: 'Support', value: 'support'},
          {title: 'Training', value: 'training'}
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      description: 'A short description for SEO (recommended between 50 and 160 characters).',
      validation: (Rule) =>
        Rule.max(160).warning('SEO descriptions should be under 160 characters.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the post.',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
