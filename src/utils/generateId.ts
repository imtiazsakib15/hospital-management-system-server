// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateId = async (model: any) => {
  const result = await model.findOne({}).sort({ createdAt: -1 });
  return result?.id + 1;
};
