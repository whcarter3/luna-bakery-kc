import Section from '../components/section';
import Form from '../components/form';

const Contact = (): JSX.Element => {
  return (
    <Section id="contact" className="items-center" alternate>
      <h1>Get in touch</h1>
      <Form />
    </Section>
  );
};

export default Contact;
