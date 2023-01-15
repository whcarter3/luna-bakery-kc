import { useState } from 'react';

interface FormErrors {
  email: boolean;
  fullname: boolean;
  subject: boolean;
  message: boolean;
}

export default function Form(): JSX.Element {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({} as FormErrors);
  const [sendButton, setSendButton] = useState('Send');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleValidation = (): boolean => {
    let tempErrors = {} as FormErrors;
    let isValidForm = true;

    if (fullname.length <= 0) {
      isValidForm = false;
      tempErrors['fullname'] = true;
    }

    if (email.length <= 0) {
      isValidForm = false;
      tempErrors['email'] = true;
    }

    if (subject.length <= 0) {
      isValidForm = false;
      tempErrors['subject'] = true;
    }

    if (message.length <= 0) {
      isValidForm = false;
      tempErrors['message'] = true;
    }

    setErrors({ ...tempErrors });
    return isValidForm;
  };

  const clearForm = (): void => {
    setFullname('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    let isValidForm = handleValidation();
    if (isValidForm) {
      setSendButton('Sending...');

      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccess(false);
        setShowError(true);
        setSendButton('Send');
        return;
      }
      setShowSuccess(true);
      setShowError(false);
      setSendButton('Send');
      clearForm();

      console.log(fullname, email, subject, message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-auto md:min-w-[700px] rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white text-primary"
    >
      <h1 className="text-2xl font-bold dark:text-primary">
        Send a message
      </h1>

      <label
        htmlFor="fullname"
        className="text-primary mt-8 dark:text-primary"
      >
        Full name
        <span className="text-red-500 dark:text-red-500">*</span>
      </label>
      <input
        type="text"
        name="fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
      />

      {errors['fullname'] && (
        <p className="text-red-500 text-sm mt-2">
          Full name is required
        </p>
      )}

      <label
        htmlFor="email"
        className="text-primary mt-4 dark:text-primary"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
      />

      {errors['email'] && (
        <p className="text-red-500 text-sm mt-2">
          E-mail is required
        </p>
      )}

      <label
        htmlFor="subject"
        className="text-primary mt-4 dark:text-primary"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
      />

      {errors['subject'] && (
        <p className="text-red-500 text-sm mt-2">
          Subject is required
        </p>
      )}

      <label
        htmlFor="message"
        className="text-primary mt-4 dark:text-primary"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
      ></textarea>

      {errors['message'] && (
        <p className="text-red-500 text-sm mt-2">
          Message is required
        </p>
      )}

      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-primary text-white rounded-md text-lg flex flex-row items-center">
          {sendButton}
        </button>

        {showSuccess && (
          <p className="text-green-500 text-sm mt-2 ml-4">
            Message sent successfully
          </p>
        )}
        {showError && (
          <p className="text-red-500 text-sm mt-2 ml-4">
            Error sending message
          </p>
        )}
      </div>
    </form>
  );
}
