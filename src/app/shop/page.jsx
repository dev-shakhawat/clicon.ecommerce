import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import Paginate from "@/components/customeUI/Paginate";
export default function page() {
  return (
    <main>
      <Breadcrumb />
      <Container>
        <div className="flex justify-between ">
          <div className="w-[20%] h-screen bg-amber-400"></div>
          <div className="w-[78%] ">all product

            <Paginate itemsPerPage={12}/>
          </div>
        </div>
      </Container>
    </main>
  );
}
