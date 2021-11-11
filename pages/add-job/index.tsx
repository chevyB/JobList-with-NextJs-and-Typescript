import Button from '../../shared/Button';
import Layout from '../../src/layout';

const addJob = () => {
  const addJobHandler = async (event: any) => {
    event.preventDefault();

    const res = await fetch('/api/create-job', {
      body: JSON.stringify({
        date: event.target.date.value,
        title: event.target.title.value,
        location: event.target.location.value,
        description: event.target.description.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
  };

  return (
    <>
      <Layout>
        <div className="font-bold text-xl">Job Form</div>
        <form className="bg-white p-10" method="POST" onSubmit={addJobHandler}>
          <div className="block py-2">
            <div className="font-semibold">Date</div>
            <input
              name="date"
              type="date"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <div className="block py-2">
            <div className="font-semibold">Title</div>
            <input
              name="title"
              type="text"
              className="border border-gray-300 rounded p-2 w-80"
            />
          </div>
          <div className="block py-2">
            <div className="font-semibold">Location</div>
            <input
              name="location"
              type="text"
              className="border border-gray-300 rounded p-2 w-80"
            />
          </div>
          <div className="block py-2">
            <div className="font-semibold">Description</div>
            <textarea
              name="description"
              className="border border-gray-300 rounded p-2 w-80"
            ></textarea>
          </div>
          <Button label="Save" type="boxedGray" />
        </form>
      </Layout>
    </>
  );
};

export default addJob;
