type ProfileSetter = {
  setProfile: React.SetStateAction<any | undefined>;
};

export default function Input({ setProfile }: ProfileSetter) {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const id = formData.get("UID");
    console.log(id);

    const response = await fetch(`/profile/${id}`);
    const result = await response.json();
    // console.log(result);
    setProfile(result);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Search UID
          <input name="UID"></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
