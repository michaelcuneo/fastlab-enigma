/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      data
      date
      videoURL
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      data
      date
      videoURL
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      data
      date
      videoURL
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const createStaffRoles = /* GraphQL */ `
  mutation CreateStaffRoles(
    $input: CreateStaffRolesInput!
    $condition: ModelStaffRolesConditionInput
  ) {
    createStaffRoles(input: $input, condition: $condition) {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const updateStaffRoles = /* GraphQL */ `
  mutation UpdateStaffRoles(
    $input: UpdateStaffRolesInput!
    $condition: ModelStaffRolesConditionInput
  ) {
    updateStaffRoles(input: $input, condition: $condition) {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteStaffRoles = /* GraphQL */ `
  mutation DeleteStaffRoles(
    $input: DeleteStaffRolesInput!
    $condition: ModelStaffRolesConditionInput
  ) {
    deleteStaffRoles(input: $input, condition: $condition) {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const createProjectStaff = /* GraphQL */ `
  mutation CreateProjectStaff(
    $input: CreateProjectStaffInput!
    $condition: ModelProjectStaffConditionInput
  ) {
    createProjectStaff(input: $input, condition: $condition) {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const updateProjectStaff = /* GraphQL */ `
  mutation UpdateProjectStaff(
    $input: UpdateProjectStaffInput!
    $condition: ModelProjectStaffConditionInput
  ) {
    updateProjectStaff(input: $input, condition: $condition) {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteProjectStaff = /* GraphQL */ `
  mutation DeleteProjectStaff(
    $input: DeleteProjectStaffInput!
    $condition: ModelProjectStaffConditionInput
  ) {
    deleteProjectStaff(input: $input, condition: $condition) {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      key
      mime
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      key
      mime
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      key
      mime
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
    }
  }
`;
export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      images {
        items {
          id
          key
          mime
          gallery {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      images {
        items {
          id
          key
          mime
          gallery {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      images {
        items {
          id
          key
          mime
          gallery {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;
