"""
Helper code to convert list of activities from ChatGPT to JS array format
"""

with open("activities_from_chat.md", "r") as file:
    activities = file.read().split("\n\n")
    output = ""
    for activity in activities:
        index2 = activity.rindex("**")
        header = activity[activity.index("**") + 2:index2]
        desc = activity[index2 + 5:]
        output += (
            f"    new Activity(\n"
            f"        \"{header}\",\n"
            f"        \"{desc}\",\n"
             "        \"abcde\"\n"
             "    ),\n")
    print(output)