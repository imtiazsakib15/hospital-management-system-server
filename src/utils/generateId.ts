// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateId = async (model: any) => {
  const result = await model.findOne({}).sort({ createdAt: -1 });
  const id = (result?.id || 0) + 1;
  return id;
};
