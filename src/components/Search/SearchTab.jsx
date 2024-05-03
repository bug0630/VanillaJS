import SelectBox from "./SelectBox";
const artSolt = [
  { value: "new", name: "신작품" },
  { value: "low", name: "낮은가격" },
  { value: "high", name: "높은가격" },
];
export default function SearchTab() {
  return (
    <div className="searchTab">
      <p>~검색 결과</p>
      <SelectBox options={artSolt}></SelectBox>
    </div>
  );
}
