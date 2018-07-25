# How to contribute to patternfly-design

Hello, we are glad you’re here! We need contributors to help PatternFly improve and grow. While code contributions are important, there are many ways that you can get involved and help out with design.


This page contains some tips and guidelines for contributing to PatternFly. These are just guidelines, not rules. Use your best judgment and feel free to propose changes to this document in a pull request.

## Getting Started

### Read Our Code Of Conduct

PatternFly adheres to the [Contributor Covenant Code of Conduct](http://contributor-covenant.org). As a PatternFly community member, you are expected to uphold this code of conduct, whether that be attending a community meeting, replying to the mailing list or contributing.

### Understand the File Structure

Each pattern must include the following files:
- overview.md: High-level information about the design problem the pattern addresses
- design.md: Design details for the pattern 
- site.md
- Relevant image files in an /img folder

Templates for these files can be found in the [pattern-template folder](https://github.com/patternfly/patternfly-design/tree/master/pattern-template/design). When you submit the markdown files, also submit the source files for sketches or wireframes. 

Files in this repository adhere to the following file structure
*Note: Items not ending in a file extension are folder names*

- pattern-library
  - category
    - pattern-name
      - discovery
        - documents
        - img
          - pattern-name-details.png
          - pattern-name-more-details.png
        - discovery.md
      - design
        - documents
        - img
        - design.md
        - overview.md
      - usability-testing
        - documents
        - usability-testing.md
        
All folder and markdown file names should be lowercase with dashes in place of spaces. Image file names should include the name of the pattern and, if possible, the defining feature of the image. Most importantly, however is that the name is descriptive and not something like "image13copy.png"

## Ways to Contribute

### Report a Bug

Before creating a bug report, check the list of known bugs and open issues. Bugs are tracked as GitHub issues. When you create a bug report, include as many details as possible, use a clear and descriptive title, and remember that an image is worth a thousand words, so try to add images and links to rawgit when possible.

### Make a Design Contribution

There are many ways you can contribute to PatternFly design. You don't need to have years of expertise to make a contribution, just a desire to learn about design and become part of a community of designers and developers working to create a better experience for enterprise users.

All contributions are made by sending a [pull-request](https://help.github.com/articles/about-pull-requests/) to the patternfly-design repo. You should start by forking this repo and cloning a local copy for making edits. If you are new to using GitHub or just need a refresher on how to set this up, please review our [Contribution Guide](https://github.com/patternfly/patternfly-design/wiki). Design pages are written in [markdown](https://guides.github.com/features/mastering-markdown/), a simple text editing language that is widely used for authoring online content.

### Help with an Existing Issue

We’re happy to have you pitch in on submitted ideas, research, or bug fixes. To find opportunities, go to the [Issues](https://github.com/patternfly/patternfly-design/issues) tab and filter using the label ‘Help-Wanted’ for a list of available issues. 

As you decide which issue to work on, it’s important to understand use cases, problems to solve, and requirements. This is a great time to ask questions and communicate with us via the comments on the GitHub issue.

Once you have determined the issue you would like to work on, do the following:

1. Tag '@patternfly-design-maintainers' if you are interested in working on this issue.
2. Submit concepts of the solution for review. Attach any sketches, wireframes or workflows that will help us to review your proposed changes.
3. Create/update any markdown files associated with this issue.

Once finalized, you create a pull request (PR) in GitHub. PRs are reviewed and approved by a [PatternFly design maintainer](https://github.com/orgs/patternfly/teams/patternfly-design-maintainers/members). That approval publishes your design immediately and automatically to the PatternFly website, using the content from your MD files.

### Propose or Modify a Design

Start by opening a new GitHub Issue and labeling it either as an “Enhancement” to modify an existing component or as a “New Pattern” to propose something new. A design proposal may have many forms, but it should answer these questions:

- What is the name of the design pattern or component (new or existing)?
- What problem does it solve?
- What are the relevant use cases?
- Are there known requirements?
- Are there products or projects that are in need of this component? Capture cross product requirements in this [Requirements Template](https://docs.google.com/document/d/1LQ_MxtsFgvxi8-ssXVHLcSaCUy0xQR_npqsBfyJH2Hw/edit?usp=sharing) by making a copy and adding your changes.


Attach any preliminary sketches or other artifacts if you have them. All proposals will be reviewed by the PatternFly project maintainers, and if accepted, prioritized for follow-up work. Tag '@patternfly-design-maintainers' if you are interested in working on this design issue.. Otherwise, accepted requests will be placed in a queue waiting for available resources.

If you are creating a new pattern, Overview and Design page templates can be found in the [pattern-template](https://github.com/patternfly/patternfly-design/tree/master/pattern-template/design) folder. You can make a copy and begin adding your markdown text.

### Conduct a Usability Test

Usability testing is essential to the practice of user experience design. Within the PatternFly project, our goal is to base design recommendations on empirical data. A good way to get started as a design contributor for PatternFly is to offer to conduct a usability test of existing content. If you are interested in performing usability testing, please contact us on the mailing list ([patternfly@redhat.com](mailto:patterfly@redhat.com)) and we will make some suggestions on where to start.

## Becoming a Maintainer

The documentation for becoming a maintainer has been taken from [Foreman](https://theforeman.org/handbook.html#Becomingamaintainer) and adapted for the PatternFly project.

As a maintainer, it is your responsibility to help manage and maintain the health of the PatternFly project.  A PatternFly maintainer has commit permissions to one or more of the repositories under the [PatternFly organization](https://github.com/patternfly). To see a list of maintainers to the PatternFly project, view the [PatternFly GitHub Teams](https://github.com/orgs/patternfly/teams) page.

Maintainers are members of the PatternFly community who exhibit most of the following behaviors:

- Review and merge code and documentation.
- Help triaging bugs and testing pull requests.
- Make well formed pull requests.
- Have a sense of duty about the project.
- Play well with others, are respectful, show gratitude.

If you want to become a maintainer, we expect you to:

- Review and test pull requests submitted by others.
- Encourage and ensure design remains an integral part of the review process and pull in designers for review as needed (you can leverage @patternfly/patternfly-design-maintainers if there is no known associated designer).
- Maintain sustained activity versus sporadic.
- Support users and other developers on [PatternFly Slack](https://patternfly.slack.com/) (there is a channel dedicated to PatternFly) and the [mailing list](mailto:patternfly@redhat.com).

Other things that are nice to do:

- Participate in (or even initiate) real-world events such as user/developer meetups, papers/talks at conferences, etc.

### How do I become a maintainer?

One person has to nominate you to the group of existing maintainers. The person who nominates you has to:

- Submit ten examples that prove this person behaves like a maintainer.
- Explain how the nominee is involved in the community and cares about the future of the project

This nomination is public and should be sent to the PatternFly mailing list. After the nomination is submitted, two other maintainers have to second the nomination. If no one objects in one week, the nomination is accepted.

Such objections may happen in public on the nomination e-mail thread. However, not everyone is comfortable giving objections publicly. Therefore, it is acceptable for other maintainers to raise their concerns with the sponsor and/or other maintainers privately if they wish to do so. The sponsor is expected to update the nomination e-mail thread to show that it is on hold pending private concerns.

Regardless, while objections are discussed either in private or public, the nomination is on hold until the objections are resolved or the nomination is rejected. In the event of a failed nomination, the sponsor (as part of the discussing group) will know the grounds for the rejection, and can pass along constructive feedback to the candidate. Care should be taken to do this sensitively.

### How do I lose maintainers status?

The maintainers team will be reevaluated periodically to ensure it remains up to date. If you are inactive in the community for six months, we will remove you from the maintainers list and revoke your permission, but we will make a mention of you on a list of previous maintainers. In the event that a maintainer continues to disregard good citizenship (or actively disrupts the project), we may need to revoke that person’s status.

The process for revoking someone's maintainer status is a discussion limited to the maintainer team given the sensitive nature of this conversation. The maintainer being discussed should be made aware of the reasons their membership is being discussed and why. It may be that this person simply does not have time and agrees to opt out of this role without any further discussion. If more is required, the process is similar to a nomination. A member should suggest the revocation with a good reason, two people second the motion, and a vote may be called if consensus cannot be reached. Someone from the maintainer team is required to follow up with the person being removed to update them and pass along constructive feedback. Again, care should be taken to do this sensitively.  

### Quick tips for new maintainers

- If something you merged broke something, it’s your responsibility to resolve or coordinate how to resolve the issue.
- Do not merge your own commits
- Do not merge commits blindly. If you do not fully understand a pull request, ask existing maintainers to take a look
- Do not merge if the build is failing. Wait until tests are green to merge.

 [1]: http://contributor-covenant.org/version/1/4/code_of_conduct.md
 [2]: mailto:patternfly@redhat.com