import { getDocumentsByAuthor } from "@/utils/doc-util";

import { getDocuments } from "@/app/lib/doc";
import ContentDisplay from "@/components/ContentDisplay";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorPage;
