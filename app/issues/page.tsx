import AddIssue from "@/components/AddIssues";

const IssuesPage = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">04</div>
        <div className="col-span-3">
          <AddIssue />
        </div>
      </div>
    </div>
  );
};

export default IssuesPage;
