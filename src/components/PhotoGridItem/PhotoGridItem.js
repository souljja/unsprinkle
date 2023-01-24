import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({id, src, alt, tags}) => {
    const imageName = src.replace(".jpg", "");
    return (
        <article>
            <Anchor href={`/photos/${id}`}>
                <picture>
                    <source
                        type="image/avif"
                        srcSet={`
                            ${imageName}.avif 1x,
                            ${imageName}@2x.avif 2x,
                            ${imageName}@3x.avif 3x
                        `}
                    />
                    <source
                        type="image/jpg"
                        srcSet={`
                            ${imageName}.jpg 1x,
                            ${imageName}@2x.jpg 2x,
                            ${imageName}@3x.jpg 3x
                        `}
                    />
                    <Image alt={alt} src={src}/>
                </picture>
            </Anchor>
            <Tags>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
        </article>
    );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
`;

const Tags = styled.ul`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  margin-left: 8px;

  &:first-of-type {
    margin-left: 0;
  }
`;

export default PhotoGridItem;
