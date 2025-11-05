// Materials.tsx
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { BsDot } from "react-icons/bs";
import MaterialsData from "@/app/components/helper/MaterialsData";

export type MaterialsProps = SliceComponentProps<Content.MaterialsGridSlice>;

/**
 * Build gridData by inserting a materialTitle after `insertIndex` materials.
 * - insertIndex is the count of items BEFORE the title (i.e. slice(0, insertIndex))
 */
function buildGridDataFromSlice(
  slice: Content.MaterialsGridSlice,
  insertIndex: number,
) {
  const materials = slice.primary.materials || [];
  const safeIndex = Math.max(0, Math.min(insertIndex, materials.length)); // clamp

  const before = materials.slice(0, safeIndex).map((item) => ({
    type: "material" as const,
    title: item.title ?? "",
    subtitle: item.subtitle ?? "",
    image: item.image ?? null,
    order: item.order ?? "",
  }));

  const after = materials.slice(safeIndex).map((item) => ({
    type: "material" as const,
    title: item.title ?? "",
    subtitle: item.subtitle ?? "",
    image: item.image ?? null,
    order: item.order ?? "",
  }));

  const titleEntry = {
    type: "materialTitle" as const,
    materialTitle: slice.primary.material_title ?? "",
  };

  return [...before, titleEntry, ...after];
}

/**
 * Determine insertion index from materialTitle text.
 * Your rules: wood => after 1, rope => after 2, steel => after 3
 */
function getInsertIndexFromTitle(title?: string) {
  const t = (title || "").toLowerCase();

  if (t.includes("wood")) return 1; // after 1
  if (t.includes("steel")) return 2; // after 3
  if (t.includes("rope")) return 3; // after 2

  // fallback default (safe)
  return 2;
}

const Materials: FC<MaterialsProps> = ({ slice }) => {
  const titleText = slice.primary.material_title ?? "";
  const insertIndex = getInsertIndexFromTitle(titleText);

  const gridData = buildGridDataFromSlice(slice, insertIndex);

  // const commonBoundedProps = {
  //   isSticky: slice.primary.issticky,
  //   "data-slice-type": slice.slice_type,
  //   "data-slice-variation": slice.variation,
  // } as any;

  return slice.variation === "withSectionTitle" ? (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      // {...commonBoundedProps}
      className="flex h-full flex-col gap-y-14 bg-white pb-12 pt-20 uppercase"
    >
      <div className="flex flex-col gap-y-7">
        <div className="slide-in-left flex items-center gap-x-3.5">
          <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
          <h1 className="text-[40px] md:text-[32px]">
            {slice.primary.section_title}
          </h1>
        </div>

        <h1 className="fade-up text-[40px] leading-none tracking-[-0.04em] sm:text-[60px] md:text-[80px] xl:text-[6.25rem]">
          {slice.primary.section_headline}
        </h1>
      </div>

      <MaterialsData gridData={gridData} />
    </Bounded>
  ) : (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      // {...commonBoundedProps}
      // ${insertIndex === 2 ? "-top-[30%]" : "-top-[45%]"}
      className={`flex h-[55vh] flex-col justify-center gap-y-14 bg-white py-12 uppercase`}
    >
      <MaterialsData gridData={gridData} />
    </Bounded>
  );
};

export default Materials;
