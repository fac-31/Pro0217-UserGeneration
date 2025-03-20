export async function deleteCharacter(userId) {
	try {
		const response = await fetch(`/delete-character/${userId}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error("Failed to delete character.");
		}

		console.log(`Character with userId ${userId} deleted successfully.`);
		return true; 
	} catch (error) {
		console.error("Error deleting character:", error);
		return false; 
	}
}
