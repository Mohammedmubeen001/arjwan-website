import { tinaField, useTina } from 'tinacms/dist/react';

export const EditableImage = ({ heroData, img, children }) => {
  const { data } = useTina(heroData);
  const { hero_section } = data;
  return <div data-tina-field={tinaField(hero_section, img)}>{children}</div>;
};
