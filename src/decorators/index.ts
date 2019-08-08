import { HttpResponse, ApiResponse, ApiResponseError, HttpStatusCodes } from "@elf/utils";
export const Logger = (): MethodDecorator => {
	return (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor) => {
		const original = propertyDescriptor.value;

		const modified = async function(...args: any[]) {
			try {
				const base = await original.apply(this, args);
				return base;
			} catch (error) {
				return new HttpResponse(
					new ApiResponse({
						errors: [
							new ApiResponseError({
								message: "An unexpected error occured. Please try again in a few minutes."
							})
						]
					}),
					HttpStatusCodes.internalServerError
				);
			}
		};

		propertyDescriptor.value = modified;

		return propertyDescriptor;
	};
};
