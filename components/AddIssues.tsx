const AddIssue = () => {
  return (
    <form action={""} className="space-y-4 mt-2">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Issue Title"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <textarea
        name="description"
        id="description"
        className="textarea textarea-accent w-full h-full max-w-xs"
        placeholder="Enter Issue Description"
      ></textarea>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        add transaction
      </button>
    </form>
  );
};

export default AddIssue;
