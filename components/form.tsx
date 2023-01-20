import { useForm, ValidationError } from '@formspree/react';

export default function Form(): JSX.Element {
  const [state, handleSubmit] = useForm('xjvdkpky');

  if (state.succeeded)
    return (
      <div className="w-full md:w-auto md:min-w-[700px] rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white text-primary">
        <h1 className="text-2xl font-bold dark:text-primary">
          Message sent!
        </h1>
        <p className="mt-4 dark:text-primary">
          Thank you for your message. I will get back to you as soon
          as possible.
        </p>
      </div>
    );

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
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
        required
      />
      <ValidationError
        prefix="Fullname"
        field="fullname"
        errors={state.errors}
      />

      <label
        htmlFor="email"
        className="text-primary mt-4 dark:text-primary"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
        required
      />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label
        htmlFor="subject"
        className="text-primary mt-4 dark:text-primary"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
        required
      />

      <ValidationError
        prefix="Subject"
        field="subject"
        errors={state.errors}
      />

      <label
        htmlFor="message"
        className="text-primary mt-4 dark:text-primary"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-secondary text-primary"
        required
      ></textarea>

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <div className="flex flex-row items-center justify-start">
        <button
          className="px-10 mt-8 py-2 bg-primary text-white rounded-md text-lg flex flex-row items-center"
          type="submit"
          disabled={state.submitting}
        >
          Send
        </button>
      </div>
    </form>
  );
}
