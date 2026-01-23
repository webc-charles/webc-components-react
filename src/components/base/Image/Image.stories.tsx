import type { Meta, StoryObj } from '@storybook/react'
import { Image, Link } from 'components'
import type { ImageFit, ImagePosition, ImageRadius } from './Image.types'

const fitOptions: ImageFit[] = [
  'cover',
  'contain',
  'fill',
  'none',
  'scale-down',
]

const positionOptions: ImagePosition[] = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

const radiusOptions: ImageRadius[] = [
  'none',
  'small',
  'medium',
  'large',
  'full',
]

const meta: Meta<typeof Image> = {
  title: 'Base/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text (required for accessibility)',
    },
    fit: {
      control: 'select',
      options: [undefined, ...fitOptions],
      description: 'Object-fit behavior',
    },
    position: {
      control: 'select',
      options: [undefined, ...positionOptions],
      description: 'Object-position within container',
    },
    aspectRatio: {
      control: 'text',
      description: 'Aspect ratio (e.g., "16/9", "4/3", "1/1")',
    },
    radius: {
      control: 'select',
      options: [undefined, ...radiusOptions],
      description: 'Border radius preset',
    },
    caption: {
      control: 'text',
      description: 'Caption text (wraps image in figure/figcaption)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Image>

const containerStyle = {
  width: '300px',
  height: '200px',
  border: '2px dashed var(--color-grey-4)',
  overflow: 'hidden',
}

export const Playground: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Random placeholder image',
    fit: 'cover',
    position: 'center',
  },
  render: (args) => (
    <div style={containerStyle}>
      <Image {...args} style={{ width: '100%', height: '100%' }} />
    </div>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <Image
      src="https://picsum.photos/600/400"
      alt="A beautiful landscape"
      caption="© 2024 Photographer Name - All rights reserved"
      radius="medium"
      style={{ maxWidth: '400px' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When a caption is provided, the image is wrapped in a `<figure>` element with proper ARIA attributes for accessibility.',
      },
    },
  },
}

export const CaptionWithLink: Story = {
  render: () => (
    <Image
      src="https://picsum.photos/600/400"
      alt="Mountain landscape at sunset"
      caption={
        <>
          Photo by{' '}
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Doe
          </Link>{' '}
          on Unsplash
        </>
      }
      radius="medium"
      style={{ maxWidth: '400px' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Captions can contain rich content like links.',
      },
    },
  },
}

export const ObjectFitCover: Story = {
  render: () => (
    <div style={containerStyle}>
      <Image
        src="https://picsum.photos/800/400"
        alt="Cover fit - image fills container, may crop"
        fit="cover"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Image fills the entire container while maintaining aspect ratio. Parts may be cropped.',
      },
    },
  },
}

export const ObjectFitContain: Story = {
  render: () => (
    <div style={{ ...containerStyle, background: 'var(--color-grey-6)' }}>
      <Image
        src="https://picsum.photos/800/400"
        alt="Contain fit - entire image visible"
        fit="contain"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Entire image is visible within the container. May have letterboxing.',
      },
    },
  },
}

export const AllFitOptions: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
      }}
    >
      {fitOptions.map((fit) => (
        <div key={fit}>
          <p style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            {fit}
          </p>
          <div
            style={{
              ...containerStyle,
              background: 'var(--color-grey-6)',
            }}
          >
            <Image
              src="https://picsum.photos/800/400"
              alt={`${fit} example`}
              fit={fit}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const ObjectPosition: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
      }}
    >
      {positionOptions.map((position) => (
        <div key={position}>
          <p style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            {position}
          </p>
          <div style={containerStyle}>
            <Image
              src="https://picsum.photos/800/400"
              alt={`${position} position`}
              fit="cover"
              position={position}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Control which part of the image is visible when using object-fit: cover.',
      },
    },
  },
}

export const AspectRatios: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
      }}
    >
      {['1/1', '4/3', '16/9', '21/9'].map((ratio) => (
        <div key={ratio}>
          <p style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            {ratio}
          </p>
          <Image
            src="https://picsum.photos/800/600"
            alt={`${ratio} aspect ratio`}
            fit="cover"
            aspectRatio={ratio}
            style={{ width: '100%' }}
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set a fixed aspect ratio for responsive images.',
      },
    },
  },
}

export const BorderRadius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {radiusOptions.map((radius) => (
        <div key={radius}>
          <p style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>
            {radius}
          </p>
          <Image
            src="https://picsum.photos/200/200"
            alt={`${radius} radius`}
            radius={radius}
            fit="cover"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      ))}
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Image
        src="https://picsum.photos/200/200"
        alt="Small avatar"
        fit="cover"
        radius="full"
        style={{ width: '32px', height: '32px' }}
      />
      <Image
        src="https://picsum.photos/200/200"
        alt="Medium avatar"
        fit="cover"
        radius="full"
        style={{ width: '48px', height: '48px' }}
      />
      <Image
        src="https://picsum.photos/200/200"
        alt="Large avatar"
        fit="cover"
        radius="full"
        style={{ width: '64px', height: '64px' }}
      />
      <Image
        src="https://picsum.photos/200/200"
        alt="Extra large avatar"
        fit="cover"
        radius="full"
        style={{ width: '96px', height: '96px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Circular avatars using radius="full" with object-fit cover.',
      },
    },
  },
}

export const CardThumbnail: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        border: '0.1rem solid var(--color-grey-4)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}
    >
      <Image
        src="https://picsum.photos/600/400"
        alt="Card thumbnail"
        fit="cover"
        aspectRatio="16/9"
        style={{ width: '100%' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem' }}>
          Card Title
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '1.4rem',
            color: 'var(--color-grey-2)',
          }}
        >
          Card description text goes here.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common pattern for card thumbnails with fixed aspect ratio.',
      },
    },
  },
}

export const HeroImage: Story = {
  render: () => (
    <div style={{ position: 'relative', height: '300px' }}>
      <Image
        src="https://picsum.photos/1600/900"
        alt="Hero background"
        fit="cover"
        position="center"
        style={{ width: '100%', height: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2.4rem',
          fontWeight: 'bold',
        }}
      >
        Hero Section
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full-width hero image with overlay.',
      },
    },
  },
}

export const Decorative: Story = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: '',
    radius: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Decorative images use an empty alt="" to be ignored by screen readers.',
      },
    },
  },
}
