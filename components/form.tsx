export default function Form(): JSX.Element {
  return (
    <form className="min-w-[500px] rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white text-primary">
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
      ></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-primary text-white rounded-md text-lg flex flex-row items-center">
          Send
        </button>
      </div>
    </form>
  );
}
