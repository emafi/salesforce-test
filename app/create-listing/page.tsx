
export default async function Page() {


  return (
    <main className="flex flex-col items-center">
      <h1 className="h1 text-2xl text-center font-bold">Our open positions</h1>

      <form
        action=""
        method="GET"
        className="flex flex-col gap-4 mt-4 bg-white text-black p-6 rounded-md shadow-md"
      >
        <h2 className="text-xl font-bold">Create a new job listing</h2>

        <label htmlFor="jobName">Job Name</label>
        <input
          type="text"
          id="jobName"
          name="jobName"
          required
          className="p-2 border rounded"
        />

        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          required
          className="p-2 border rounded"
        />

        <label htmlFor="skillsRequired">Skills Required (comma separated)</label>
        <input
          type="text"
          id="skillsRequired"
          name="skillsRequired"
          required
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
        >
          Create Job Listing
        </button>
      </form>
    </main>
  );
}
