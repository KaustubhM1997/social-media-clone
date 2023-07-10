export default function CreatePost() {
  const accountHolder =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
  return (
    <>
      <div className="create-post">
        <img src={accountHolder} alt="account image" />

        <div className="create-post-elements">
          <p>What would you like to share?</p>

          <button>Post</button>
        </div>
      </div>
    </>
  );
}
