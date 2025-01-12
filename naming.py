import os

def rename_images(folder_path):
    try:
        if not os.path.exists(folder_path):
            raise FileNotFoundError(f"folder '{folder_path}' is not found.")
        image_extensions = (".jpg", ".jpeg", ".png")
        image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(image_extensions)]
        image_files.sort()

        if not image_files:
            print("There is no Image in folder.")
            return
        
        for i, filename in enumerate(image_files):
            src = os.path.join(folder_path, filename)
            new_filename = str(i) + os.path.splitext(filename)[1]
            dst = os.path.join(folder_path, new_filename)
            os.rename(src, dst)
            print(f"'{filename}' is replaced to '{new_filename}'.")
        
        print("All names are changed.")
    except FileNotFoundError as e:
        print(e)
    except Exception as e:
        print(f"Error occurred : {e}")

folder_path = "C:/Users/Flamingo/Desktop/Desk/images/temp"
rename_images(folder_path)