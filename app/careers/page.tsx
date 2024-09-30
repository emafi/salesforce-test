import { formatStringToList } from "../utils";

export default async function Page() {
  const query = encodeURIComponent('SELECT Id, Name, job_description__c, Skills_Required__c FROM Position__c');
  const res = await fetch(`https://thewavestudio-dev-ed.develop.my.salesforce.com/services/data/v61.0/query/?q=${query}`, {
    headers: {Authorization: `Bearer ${process.env.BEARER_TOKEN}`}
  })
  const data = await res.json();
  const positions = data?.records;

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Error:", errorData);
    if (errorData?.errorCode === "INVALID_SESSION_ID") {
      console.log("Access token is invalid or expired.");
    }
  }
  
  

  return (
    <main className="flex flex-col items-center">
      <h1 className="h1 text-2xl text-center font-bold">Our open positions</h1>
      <div className="flex flex-col gap-6 mt-4 font-bold lg:max-w-[800px]">{positions?.map((pos: {
        Id: string,
        Name: string,
        job_description__c: string,
        Skills_Required__c: string,
      }) => (
        <div key={pos.Id} className="p-4 flex flex-col border-solid border-2 rounded-md bg-white text-black">
          <h2 className="text-xl">{pos.Name}</h2>
          <p>
          {pos.job_description__c}
          </p>
          <h3 className="text-lg">Skill richieste:</h3>
          <ul className="flex flex-col">
           {formatStringToList({text: pos.Skills_Required__c}).map((item, index) => <li key={index}>- {item}</li>)}
          </ul>
        </div>
      )) }</div> 
    </main>
  )
}
