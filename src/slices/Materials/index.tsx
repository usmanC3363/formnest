import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/helper/Bounded";
import { BsDot } from "react-icons/bs";
import MaterialsData from "@/app/components/helper/MaterialsData";
// import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `MaterialsGrid`.
 */
export type MaterialsProps = SliceComponentProps<Content.MaterialsGridSlice>;

/**
 * Component for "Materials" Slices.
 */
const Materials: FC<MaterialsProps> = ({ slice }) => {
  // const [currentMaterial, setCurrentMaterial] = useState(0);
  // const toggleMaterial = (index: number) => setCurrentMaterial(index);

  return slice.variation === "withSectionTitle" ? (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-full flex-col gap-y-14 bg-white pb-12 pt-20 uppercase"
    >
      <div className="flex flex-col gap-y-7">
        {/* Section Title and DOT */}
        <div className="slide-in-left flex items-center gap-x-3.5">
          <BsDot className="h-5 w-5 rounded-full bg-mybrown-50" />
          <h1 className="text-[40px] md:text-[32px]">
            {slice.primary.section_title}
          </h1>
        </div>

        {/* Section Heading */}
        <h1 className="fade-up text-[40px] leading-none tracking-[-0.04em] sm:text-[60px] md:text-[80px] xl:text-[6.25rem]">
          {slice.primary.section_headline}
        </h1>
      </div>

      <MaterialsData
        gridData={[
          // Before insert point
          ...slice.primary.materials.slice(0, 1).map((item) => ({
            type: "material",
            title: item.title ?? "",
            subtitle: item?.subtitle ?? "",
            image: item.image ?? "",
            order: item.order ?? "",
          })),
          // Insert section title
          {
            type: "materialTitle",
            materialTitle: slice.primary.material_title ?? "",
          },
          // After insert point
          ...slice.primary.materials.slice(1).map((item) => ({
            type: "material",
            title: item.title ?? "",
            subtitle: item.subtitle ?? "",
            image: item.image ?? "",
            order: item.order ?? "",
          })),
        ]}
      />
    </Bounded>
  ) : (
    <Bounded
      isSticky={slice.primary.issticky}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-[55vh] flex-col justify-center gap-y-14 bg-white py-12 uppercase"
    >
      <MaterialsData
        gridData={[
          // Before insert point
          ...slice.primary.materials.slice(0, 2).map((item) => ({
            type: "material",
            title: item.title ?? "",
            subtitle: item.subtitle ?? "",
            image: item.image ?? "",
            order: item.order ?? "",
          })),
          // Insert section title
          {
            type: "materialTitle",
            materialTitle: slice.primary.material_title ?? "",
          },
          // After insert point
          ...slice.primary.materials.slice(2).map((item) => ({
            type: "material",
            title: item.title ?? "",
            subtitle: item.subtitle ?? "",
            image: item.image ?? "",
            order: item.order ?? "",
          })),
        ]}
      />
    </Bounded>
  );
};

export default Materials;
