import * as path from "path";
import * as fs from "fs";
import { HttpResponse, ApiResponse, ApiResponseError, HttpStatusCodes } from "elf-utils";

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

export const FileLogger = (): MethodDecorator => {
	return (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor) => {
		const original = propertyDescriptor.value;

		const modified = async function(...args: any[]) {
			try {
				const base = await original.apply(this, args);
				return base;
			} catch (error) {
				const filePath = path.resolve(__dirname, "elf.log");
				const content = `\nFATAL: ${new Date().toISOString()}: ${error}\n`;
				fs.appendFile(filePath, content, () => {});

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

export const ConsoleLogger = (): MethodDecorator => {
	return (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor) => {
		const original = propertyDescriptor.value;

		const modified = async function(...args: any[]) {
			try {
				const base = await original.apply(this, args);
				return base;
			} catch (error) {
				console.log("FATAL: ", new Date().toISOString(), ": ", error);
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
