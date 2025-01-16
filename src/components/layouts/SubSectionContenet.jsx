import React from "react";
import SubSectionHeader from "../common/SubSectionHeader";
import Paragraph from "../common/Paragraph";
import Image from "../common/Image";
import SubSectionLink from "../common/SubSectionLink";
import List from "../common/List";
import SubHeading from "../common/SubHeading";

function SubSectionContent({ content }) {
  const renderContent = (key, value, index) => {
    switch (key) {
      case 'sub_section_header':
        return <SubSectionHeader key={`${key}-${index}`} text={value} />;
      case 'link':
        return <SubSectionLink key={`${key}-${index}`} href={value} />;
      case 'image':
        return <Image key={`${key}-${index}`} src={value || "/placeholder.svg"} />;
      case 'paragraph':
        return <Paragraph key={`${key}-${index}`} text={value} />;
      case 'list':
        return <List key={`${key}-${index}`} items={value} />;
      case 'sub_heading':
        return <SubHeading key={`${key}-${index}`} text={value} />;
      default:
        return null;
    }
  };

  const renderableItems = Object.keys(content).map((key, index) => {
    return renderContent(key, content[key], index);
  });

  return (
    <div className="p-8 mx-4 mb-8 bg-opacity-75 rounded-lg md:rounded-3xl bg-bg">
      {renderableItems}
    </div>
  );
}

export default SubSectionContent;

